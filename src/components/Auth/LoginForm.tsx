import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/startup_logo.jpg";

interface LoginFormProps {
  onToggleForm: () => void;
}

const PARTICLES = [
  { cls: "w-1 h-1 top-1/4 left-1/4", delay: "0s", color: "bg-gold-400/60" },
  { cls: "w-1.5 h-1.5 top-1/3 left-2/3", delay: "0.8s", color: "bg-primary-400/50" },
  { cls: "w-1 h-1 top-2/3 left-1/4", delay: "1.5s", color: "bg-gold-300/50" },
  { cls: "w-2 h-2 top-1/2 left-3/4", delay: "2s", color: "bg-white/20" },
  { cls: "w-1 h-1 top-3/4 left-1/2", delay: "0.4s", color: "bg-primary-300/50" },
  { cls: "w-1.5 h-1.5 top-14 left-3/4", delay: "1.2s", color: "bg-gold-400/40" },
];

const LoginForm: React.FC<LoginFormProps> = ({ onToggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const success = await login(email, password);
      if (!success) setError("Email ou mot de passe incorrect");
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-night-950">
      {/* ── Nebula background ── */}
      <div className="absolute -top-64 -left-64 w-[700px] h-[700px] bg-primary-900/70 rounded-full blur-[140px] animate-float pointer-events-none" />
      <div
        className="absolute -bottom-64 -right-64 w-[600px] h-[600px] bg-gold-600/25 rounded-full blur-[120px] animate-float pointer-events-none"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-primary-700/20 rounded-full blur-[100px] animate-float pointer-events-none"
        style={{ animationDelay: "1.2s" }}
      />
      <div className="absolute top-20 right-1/3 w-[250px] h-[250px] bg-gold-400/10 rounded-full blur-[80px] animate-pulse-soft pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Light beams */}
      <div className="absolute top-0 left-1/3 w-px h-3/4 bg-gradient-to-b from-transparent via-gold-400/10 to-transparent -rotate-12 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-2/3 bg-gradient-to-b from-transparent via-primary-400/10 to-transparent rotate-6 pointer-events-none" />

      {/* Floating particles */}
      {PARTICLES.map(({ cls, delay, color }, i) => (
        <div
          key={i}
          className={`absolute ${cls} ${color} rounded-full animate-float pointer-events-none`}
          style={{ animationDelay: delay }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-sm px-4 py-12 animate-fade-in-up">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-5">
            <div
              className="absolute inset-0 rounded-2xl border border-gold-400/30 animate-spin"
              style={{ animationDuration: "10s" }}
            />
            <div
              className="absolute -inset-2 rounded-3xl border border-primary-400/15 animate-spin"
              style={{ animationDuration: "16s", animationDirection: "reverse" }}
            />
            <div className="absolute -inset-5 bg-gradient-to-r from-primary-500/20 to-gold-500/20 rounded-3xl blur-xl animate-pulse-soft" />
            <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
              <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-1">Bon retour !</h2>
          <p className="text-white/35 text-sm text-center">
            Connectez-vous et continuez à construire
          </p>
        </div>

        {/* Glass card */}
        <div className="relative backdrop-blur-2xl bg-white/[0.06] rounded-3xl border border-white/10 p-8 shadow-2xl overflow-hidden animate-scale-in">
          {/* Top highlight line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-error-900/40 border border-error-500/30 text-error-300 px-4 py-3 rounded-2xl text-sm animate-slide-down flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-error-400 flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Email */}
            <div className="group">
              <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors duration-200" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 focus:bg-white/10 transition-all duration-200"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors duration-200" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 focus:bg-white/10 transition-all duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 rounded border-white/20 bg-white/5 text-gold-500 focus:ring-gold-500/30"
                />
                <span className="text-sm text-white/35">Se souvenir</span>
              </label>
              <a href="#" className="text-sm text-white/35 hover:text-gold-400 transition-colors">
                Mot de passe oublié ?
              </a>
            </div>

            {/* Submit — gold */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full py-4 px-6 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-night-950 text-sm font-bold rounded-2xl shadow-glow-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-night-950/30 border-t-night-950 rounded-full animate-spin" />
                  <span>Connexion...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>Se connecter</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-white/25 mt-6">
            Pas encore de compte ?{" "}
            <button
              type="button"
              onClick={onToggleForm}
              className="font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              Rejoindre la communauté
            </button>
          </p>
        </div>

        {/* Test accounts */}
        <div className="mt-5">
          <div className="relative mb-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/8" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-night-950 text-xs text-white/20 font-medium">
                Comptes de démo
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { role: "Membre", email: "member@startup.com" },
              { role: "Coordinateur", email: "coordinator@startup.com" },
              { role: "Admin", email: "admin@startup.com" },
            ].map(({ role, email: testEmail }, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setEmail(testEmail); setPassword("password"); }}
                className="bg-white/5 border border-white/8 hover:bg-white/10 hover:border-gold-400/30 rounded-xl p-2.5 text-center transition-all duration-200 hover:scale-105 group"
              >
                <div className="text-xs font-bold text-white/50 group-hover:text-white/90 transition-colors">
                  {role}
                </div>
                <div className="text-xs text-white/20 group-hover:text-white/50 font-mono mt-0.5 transition-colors">
                  {testEmail.split("@")[0]}
                </div>
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-white/15 mt-2">
            Cliquez pour remplir automatiquement
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
