'use client';

import { useState } from 'react';
import { useAdmin } from '@/lib/AdminContext';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminLogin() {
    const { adminLogin } = useAdmin();
    const [step, setStep] = useState<'username' | 'mobile' | 'otp'>('username');
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [error, setError] = useState('');

    const handleUsernameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.toLowerCase() === 'admin') {
            setStep('mobile');
            setError('');
        } else {
            setError('Invalid username');
        }
    };

    const handleMobileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mobile.length >= 10) {
            setStep('otp');
            setError('');
            alert('Mock OTP sent: 1234');
        } else {
            setError('Please enter a valid mobile number');
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!captchaChecked) {
            setError('Please verify you are human');
            return;
        }
        if (otp === '1234') {
            adminLogin(mobile);
        } else {
            setError('Invalid OTP');
        }
    };

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Admin Portal</h1>

                    {step === 'username' && (
                        <form onSubmit={handleUsernameSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={styles.input}
                                    placeholder="Enter username"
                                    autoFocus
                                />
                            </div>
                            <button type="submit" className={styles.button}>Next</button>
                        </form>
                    )}

                    {step === 'mobile' && (
                        <form onSubmit={handleMobileSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Mobile Number</label>
                                <input
                                    type="tel"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className={styles.input}
                                    placeholder="+91 98765 43210"
                                    autoFocus
                                />
                            </div>
                            <button type="submit" className={styles.button}>Send OTP</button>
                        </form>
                    )}

                    {step === 'otp' && (
                        <form onSubmit={handleOtpSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Enter OTP</label>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className={styles.input}
                                    placeholder="Enter 4-digit OTP"
                                    maxLength={4}
                                    autoFocus
                                />
                            </div>

                            <div className={styles.captcha}>
                                <input
                                    type="checkbox"
                                    id="captcha"
                                    checked={captchaChecked}
                                    onChange={(e) => setCaptchaChecked(e.target.checked)}
                                />
                                <label htmlFor="captcha">I am human</label>
                            </div>

                            <button type="submit" className={styles.button}>Login</button>
                        </form>
                    )}

                    {error && <p className={styles.error}>{error}</p>}
                </div>
            </div>
            <Footer />
        </main>
    );
}
