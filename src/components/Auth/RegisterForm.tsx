import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  MapPin,
  Briefcase,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Users,
  Trophy,
  Shield,
  Crown,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assets/startup_logo.jpg";

interface RegisterFormProps {
  onToggleForm: () => void;
}

type Step = 1 | 2 | 3;

const STEPS = [
  { label: "Identité" },
  { label: "Profil" },
  { label: "Sécurité" },
];

const ROLES = [
  { value: "member", label: "Membre", icon: Users, sub: "Apprenez & grandissez" },
  { value: "coordinator", label: "Coordinateur", icon: Briefcase, sub: "Guidez des équipes" },
  { value: "administrator", label: "Admin", icon: Crown, sub: "Gérez la communauté" },
] as const;

const PARTICLES = [
  { cls: "w-1 h-1 top-1/4 right-1/4", delay: "0s", color: "bg-gold-400/50" },
  { cls: "w-2 h-2 top-1/3 left-1/4", delay: "1s", color: "bg-primary-400/40" },
  { cls: "w-1 h-1 top-3/4 right-1/3", delay: "0.5s", color: "bg-gold-300/50" },
  { cls: "w-1.5 h-1.5 top-2/3 left-2/3", delay: "1.8s", color: "bg-white/20" },
  { cls: "w-1 h-1 top-1/2 left-1/3", delay: "2.2s", color: "bg-primary-300/50" },
];

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleForm }) => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "member" as "member" | "coordinator" | "administrator",
    profession: "",
    location: "",
    bio: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { register } = useAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name.trim() || !formData.email.trim())) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }
    setError("");
    setStep((s) => (s + 1) as Step);
  };

  const handleBack = () => {
    setError("");
    setStep((s) => (s - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const success = await register(formData);
      if (!success) setError("Erreur lors de l'inscription");
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = Math.min(4, Math.floor(formData.password.length / 2));

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-night-950 py-12">
      {/* ── Nebula background (mirrored blobs vs login) ── */}
      <div className="absolute -top-64 -right-64 w-[700px] h-[700px] bg-primary-900/60 rounded-full blur-[140px] animate-float pointer-events-none" />
      <div
        className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-gold-600/20 rounded-full blur-[120px] animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[350px] h-[350px] bg-primary-600/15 rounded-full blur-[90px] animate-float pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

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
      <div className="absolute top-0 right-1/3 w-px h-3/4 bg-gradient-to-b from-transparent via-gold-400/8 to-transparent rotate-12 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-2/3 bg-gradient-to-b from-transparent via-primary-400/8 to-transparent -rotate-6 pointer-events-none" />

      {/* Particles */}
      {PARTICLES.map(({ cls, delay, color }, i) => (
        <div
          key={i}
          className={`absolute ${cls} ${color} rounded-full animate-float pointer-events-none`}
          style={{ animationDelay: delay }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-md px-4 animate-fade-in-up">
        {/* Brand header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-primary-500/20 to-gold-500/20 rounded-2xl blur-lg animate-pulse-soft" />
            <div className="relative bg-white/10 backdrop-blur-sm p-2.5 rounded-xl border border-white/20">
              <img src={Logo} alt="Logo" className="h-9 w-9 object-contain" />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-tight">Startup Academy</h1>
            <p className="text-gold-400/70 text-xs italic">L'Art d'Innover Sans Diplôme</p>
          </div>
        </div>

        {/* Page title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">Créer mon compte</h2>
          <p className="text-white/30 text-sm">Votre aventure entrepreneuriale commence ici</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-5 px-1">
          {STEPS.map(({ label }, i) => {
            const n = i + 1;
            const done = step > n;
            const active = step === n;
            return (
              <React.Fragment key={i}>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                      done
                        ? "bg-gold-500 border-gold-500 text-night-950"
                        : active
                        ? "bg-transparent border-gold-400 text-gold-400"
                        : "bg-transparent border-white/15 text-white/25"
                    }`}
                  >
                    {done ? <CheckCircle className="h-3.5 w-3.5" /> : n}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block transition-colors ${
                      active ? "text-white/70" : "text-white/25"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-px rounded-full transition-all duration-500 ${
                      step > n ? "bg-gold-500/60" : "bg-white/10"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Glass card */}
        <div className="relative backdrop-blur-2xl bg-white/[0.06] rounded-3xl border border-white/10 p-8 shadow-2xl overflow-hidden animate-scale-in">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {error && (
            <div className="bg-error-900/40 border border-error-500/30 text-error-300 px-4 py-3 rounded-2xl text-sm animate-slide-down flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-error-400 flex-shrink-0" />
              {error}
            </div>
          )}

          {/* ── STEP 1: Identité ── */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="group">
                <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 focus:bg-white/10 transition-all duration-200"
                    placeholder="Votre nom complet"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 focus:bg-white/10 transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="relative w-full py-4 px-6 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-night-950 text-sm font-bold rounded-2xl shadow-glow-gold transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="flex items-center justify-center gap-2">
                  <span>Continuer</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          )}

          {/* ── STEP 2: Profil ── */}
          {step === 2 && (
            <div className="space-y-5">
              {/* Role cards */}
              <div>
                <label className="block text-xs font-semibold text-white/35 mb-3 uppercase tracking-widest">
                  Votre rôle
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {ROLES.map(({ value, label, icon: Icon, sub }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: value })}
                      className={`p-3 rounded-2xl border-2 text-center transition-all duration-200 hover:scale-105 ${
                        formData.role === value
                          ? "border-gold-400/70 bg-gold-400/10 shadow-glow-gold"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 mx-auto mb-1.5 ${
                          formData.role === value ? "text-gold-400" : "text-white/35"
                        }`}
                      />
                      <div
                        className={`text-xs font-bold ${
                          formData.role === value ? "text-white" : "text-white/50"
                        }`}
                      >
                        {label}
                      </div>
                      <div className="text-xs text-white/25 leading-tight mt-0.5">{sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                  Profession
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors" />
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 focus:bg-white/10 transition-all duration-200"
                    placeholder="ex: Développeur, Designer…"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                  Localisation
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 focus:bg-white/10 transition-all duration-200"
                    placeholder="Ville, Pays"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center justify-center py-4 px-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 rounded-2xl transition-all duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="relative flex-1 py-4 px-6 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-night-950 text-sm font-bold rounded-2xl shadow-glow-gold transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <div className="flex items-center justify-center gap-2">
                    <span>Continuer</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Sécurité ── */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group">
                <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-11 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 focus:bg-white/10 transition-all duration-200"
                    placeholder="Minimum 6 caractères"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {/* Strength bar */}
                {formData.password.length > 0 && (
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4].map((lvl) => (
                      <div
                        key={lvl}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          passwordStrength >= lvl
                            ? lvl <= 2
                              ? "bg-error-400"
                              : lvl === 3
                              ? "bg-warning-400"
                              : "bg-success-400"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="group">
                <label className="block text-xs font-semibold text-white/35 mb-2 uppercase tracking-widest">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <Shield className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25 group-focus-within:text-gold-400 transition-colors" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-12 py-3.5 bg-white/5 border rounded-2xl text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:bg-white/10 transition-all duration-200 ${
                      formData.confirmPassword.length > 0
                        ? formData.password === formData.confirmPassword
                          ? "border-success-400/50 focus:ring-success-400/20"
                          : "border-error-400/50 focus:ring-error-400/20"
                        : "border-white/10 focus:border-gold-400/50 focus:ring-gold-400/20"
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                  >
                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {formData.confirmPassword.length > 0 &&
                  formData.password === formData.confirmPassword && (
                    <p className="text-xs text-success-400 mt-1 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Les mots de passe correspondent
                    </p>
                  )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center justify-center py-4 px-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 rounded-2xl transition-all duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative flex-1 py-4 px-6 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-night-950 text-sm font-bold rounded-2xl shadow-glow-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-night-950/30 border-t-night-950 rounded-full animate-spin" />
                      <span>Inscription...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Créer mon compte</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          )}

          <p className="text-center text-sm text-white/25 mt-6">
            Déjà un compte ?{" "}
            <button
              type="button"
              onClick={onToggleForm}
              className="font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              Se connecter
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
