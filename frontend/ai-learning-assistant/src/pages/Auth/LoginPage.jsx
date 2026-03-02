import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context';
import { BrainCircuit, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await login(email, password);
      if (res?.ok) {
        toast.success('Logged in successfully!');
        navigate('/dashboard');
      } else {
        throw new Error(res?.error || 'Failed to login');
      }
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials');
      toast.error(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px, transparent_1px)] bg-size-[16px_16px] opacity-30" />
      <div className="relative w-full max-w-md px-6">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-xl p-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 shadow-lg">
              <BrainCircuit className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h1 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Welcome back</h1>
            <p className="text-slate-500 text-sm">Sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Email</label>
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-emerald-500' : 'text-slate-400'
                  }`}
                >
                  <Mail className="h-5 w-5" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">Password</label>
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${
                    focusedField === 'password' ? 'text-emerald-500' : 'text-slate-400'
                  }`}
                >
                  <Lock className="h-5 w-5" strokeWidth={2} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-12 pl-12 pr-4 border-2 border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-medium transition-all duration-200 focus:outline-none focus:border-emerald-500"
                  placeholder="........"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                <p className="text-xs text-red-600 font-medium text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full h-12 bg-linear-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
                  </>
                )}
              </span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200/60">
            <p className="text-center text-sm text-slate-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-emerald-600 hover:text-emerald-700">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;