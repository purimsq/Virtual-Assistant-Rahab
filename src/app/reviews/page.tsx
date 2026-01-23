import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReviewSection from '@/components/ReviewSection';
import Footer from '@/components/Footer';
import styles from './reviews.module.css';

export default function ReviewsPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, paddingTop: '100px', paddingBottom: '40px' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', marginBottom: '1rem' }}>
                    <Link
                        href="/"
                        className={styles.backLink}
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
                <ReviewSection />
            </div>
            <Footer />
        </main>
    );
}
