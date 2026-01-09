export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 text-center text-sm text-white/40">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                <p>&copy; {new Date().getFullYear()} AGENCY. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
