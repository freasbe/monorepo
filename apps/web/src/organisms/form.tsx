"use client";
import React, {useEffect, useState, useRef, JSX} from "react";
import Link from "next/link";

enum Typologie {
    Régies = 'Régies',
    Installateurs = 'Installateurs',
}

interface FormState {
    email: string;
    typologie: Typologie | ''
}

interface ToastState {
    displayToast: boolean;
    message: string;
    className: string;
    error: boolean;
    url: string;
}

interface ToastMessageProps {
    toastValues: ToastState;
}


function ToastMessage({ toastValues }: ToastMessageProps): JSX.Element {
    return (
        <div className={`toast ${toastValues.className}`}>
            <div className={`alert ${toastValues.error ? 'alert-error' : 'alert-success'}`}>
                <svg className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={toastValues.error ? "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} />
                </svg>
                <div className="flex flex-col">
                    <span>{toastValues.message}</span>
                    {toastValues.url ? <span><Link className="underline font-bold" href={toastValues.url}>Cliquez ici</Link> pour exprimer vos besoins</span> : null}
                </div>
            </div>
        </div>
    );
}

type TimeoutRef = ReturnType<typeof setTimeout> | null;

const useToast = (toastValues: ToastState, setToastValues: React.Dispatch<React.SetStateAction<ToastState>>) => {
    const fadeTimeoutRef = useRef<TimeoutRef | null>(null);
    const resetTimeoutRef = useRef<TimeoutRef | null>(null);

    useEffect(() => {
        if (toastValues.displayToast) {
            fadeTimeoutRef.current = setTimeout(() => {
                setToastValues(prevState => ({
                    ...prevState,
                    className: 'fade-out-toast'
                }));
            }, 5000);
            resetTimeoutRef.current = setTimeout(() => {
                setToastValues(prevState => ({
                    ...prevState,
                    displayToast: false
                }));
            }, 6001);
        }

        return () => {
            if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
            if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
        };
    }, [toastValues.displayToast, setToastValues]);
};

const FormSection: React.FC = () => {
    const [form, setForm] = useState<FormState>({ email: '', typologie: '' });
    const [toastValues, setToastValues] = useState<ToastState>({
        displayToast: false,
        message: '',
        className: '',
        error: true,
        url: ''
    });

    useToast(toastValues, setToastValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const formUriHandler = () => {
        switch (form.typologie) {
            case Typologie.Installateurs:
                return 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAYAAKs0JQNUM1E1SFlNQTdOWFlLNUQ0UjNJOVpNMloyRC4u';
            case Typologie.Régies:
                return 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAYAAKs0JQNUOVVZN1ZIM1BBUEFXNjBINDUxWlZQRUlLWC4u';
            default:
                return '';
        }
    };

    const handleSubmit = (): void => {
        if (validateInput(form)) {
            const makeUrl = process.env.NEXT_PUBLIC_MAKE_LEAD_WEBHOOK_URI;
            if (makeUrl) {
                fetch(makeUrl, {
                    method: 'POST',
                    body: JSON.stringify(form),
                    headers: { 'Content-Type': 'application/json' },
                }).then(response => {
                    setToastValues({
                        error: !response.ok,
                        className: 'fade-in-toast',
                        message: response.ok ? 'Formulaire soumis avec succès' : 'Erreur lors de la soumission du formulaire',
                        displayToast: true,
                        url: response.ok ? formUriHandler() : ''
                    });
                }).catch(_ => {
                    setToastValues({
                        error: true,
                        className: 'fade-in-toast',
                        message: 'Erreur lors de la soumission du formulaire',
                        displayToast: true,
                        url: ''
                    });
                });
            } else {
                setToastValues({
                    displayToast: true,
                    message: 'Erreur lors de la soumission du formulaire',
                    className: 'fade-in-toast',
                    error: true,
                    url: ''
                });
            }
        }
    };

    const validateInput = (formData: FormState): boolean => {
        if (!Object.values(Typologie).includes(formData.typologie as Typologie)) {
            setToastValues({
                displayToast: true,
                message: 'Veuillez sélectionner un profil valide',
                className: 'fade-in-toast',
                error: true,
                url: ''
            });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setToastValues({
                displayToast: true,
                message: 'Veuillez entrer un email valide',
                className: 'fade-in-toast',
                error: true,
                url: ''
            });
            return false;
        }
        return true;
    };

    return (
        <div className="pt-8 w-full md:rounded-tl-[200px] bg-base-100 bg-gradient-to-b from-base-100 to-base-300 md:h-[60vh] flex flex-col items-center justify-center" id="form">
            <div className="w-full md:w-7/12 flex flex-col gap-y-8 px-4 md:px-0">
                <div>
                    <h2 className="w-full md:w-1/3 leading-tight text-5xl font-semibold">
                        <span className="text-primary">Rejoignez</span> Freasbe
                    </h2>
                    <p className="font-sm mt-3">Et restez informés sur la suite du projet</p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-x-3">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Quel est votre rôle</span>
                        </div>
                        <select className="select select-bordered" name="typologie" onChange={handleChange} value={form.typologie}>
                            <option>Sélectionnez votre profil</option>
                            {Object.values(Typologie).map((value, index) => (
                                <option key={index}>{value}</option>
                            ))}
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Quel est votre email ?</span>
                        </div>
                        <input className="input input-bordered w-full max-w-xs" name="email" onChange={handleChange} placeholder="freasbe@mail.com" type="text" />
                    </label>
                </div>
                <div>
                    <button className="btn btn-primary text-white" onClick={handleSubmit}>Je veux suivre le projet</button>
                </div>
            </div>
            {toastValues.displayToast ? <ToastMessage toastValues={toastValues} /> : null}
        </div>
    );
};

export default FormSection;
