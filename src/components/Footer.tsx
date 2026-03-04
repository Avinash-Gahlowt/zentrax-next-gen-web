import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/30">
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">Z</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Zentrax<span className="text-primary">Labs</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Building next-gen software products that transform how businesses operate.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/pos" className="hover:text-primary transition-colors">ZenPOS</Link></li>
            <li><span className="opacity-50">More coming soon</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 ZentraxLabs. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
