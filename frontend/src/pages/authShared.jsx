import { Video, BarChart2, Shield } from 'lucide-react';

export const AUTH_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  /* Main Wrapper */
  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', system-ui, sans-serif;
    color: #fff;
    padding: 20px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    background: transparent;
  }

  .auth-glow-accent {
    position: fixed;
    width: 60vw;
    height: 60vh;
    top: -10%;
    left: 20%;
    background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(20,20,20,0) 65%);
    pointer-events: none;
    z-index: 0;
  }

  .auth-split-wrapper {
    display: flex;
    width: 100%;
    max-width: 960px;
    min-height: 600px;
    background: rgba(20, 20, 20, 0.65);
    border: 1px solid rgba(45, 42, 36, 0.6);
    border-radius: 28px;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    overflow: hidden;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease;
  }

  /* Accent top line */
  .auth-top-accent {
    position: absolute;
    top: 0;
    left: 15%;
    right: 15%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
  }

  /* Left Pane (Feature / Brand) */
  .auth-left-pane {
    flex: 1.1;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid rgba(45, 42, 36, 0.4);
    background: linear-gradient(145deg, rgba(212, 175, 55, 0.02) 0%, rgba(20, 20, 20, 0.4) 100%);
    position: relative;
  }

  .auth-left-header {
    display: flex;
    flex-direction: column;
  }

  .auth-left-logo {
    height: 100px;
    width: auto;
    align-self: flex-start;
    margin-left: -20px;
    margin-bottom: -10px;
  }

  .auth-feature-title {
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: #eedca0;
    margin-top: 10px;
    margin-bottom: 12px;
  }

  .auth-feature-desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 30px;
  }

  .auth-feature-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .auth-feature-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.02);
    transition: all 0.25s ease;
  }

  .auth-feature-item:hover {
    background: rgba(212, 175, 55, 0.04);
    border-color: rgba(212, 175, 55, 0.25);
    transform: translateY(-2px);
  }

  .auth-feature-icon-box {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(212, 175, 55, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4af37;
    flex-shrink: 0;
  }

  .auth-feature-text h3 {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #eedca0;
    margin: 0 0 4px;
  }

  .auth-feature-text p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.45);
    margin: 0;
    line-height: 1.45;
  }

  /* Right Pane (Form side) */
  .auth-right-pane {
    flex: 0.9;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .auth-logo-mobile {
    display: none;
    height: 90px;
    width: auto;
    margin: 0 auto 16px;
  }

  .auth-form-title {
    font-family: 'Inter', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #eedca0;
    letter-spacing: -0.02em;
    margin: 0 0 6px;
    text-align: left;
  }

  .auth-form-sub {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.45);
    margin: 0 0 24px;
    text-align: left;
  }

  /* Social Buttons */
  .auth-social-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 20px;
  }

  .auth-social-btn {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(45, 42, 36, 0.4);
    border-radius: 12px;
    color: #fff;
    padding: 10px 14px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
  }

  .auth-social-btn:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(212, 175, 55, 0.3);
    transform: translateY(-1px);
  }

  .auth-divider {
    display: flex;
    align-items: center;
    text-align: center;
    color: rgba(255, 255, 255, 0.18);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
  }

  .auth-divider::before, .auth-divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid rgba(45, 42, 36, 0.4);
  }

  .auth-divider:not(:empty)::before {
    margin-right: .5em;
  }

  .auth-divider:not(:empty)::after {
    margin-left: .5em;
  }

  /* Inputs & Form */
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .auth-input-wrap {
    position: relative;
    width: 100%;
  }

  .auth-input {
    width: 100%;
    box-sizing: border-box;
    background: rgba(26, 26, 26, 0.4);
    border: 1px solid rgba(45, 42, 36, 0.5);
    border-radius: 12px;
    padding: 12px 16px 12px 42px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #fff;
    outline: none;
    transition: all 0.25s ease;
  }

  .auth-input::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  .auth-input:focus {
    background: rgba(212, 175, 55, 0.02);
    border-color: rgba(212, 175, 55, 0.5);
    box-shadow: 0 0 12px rgba(212, 175, 55, 0.15);
  }

  .auth-input-wrap svg.icon-left {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.3);
    transition: color 0.25s ease;
  }

  .auth-input-wrap:focus-within svg.icon-left {
    color: #d4af37;
  }

  .auth-eye-btn {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.3);
    transition: color 0.2s ease;
  }

  .auth-eye-btn:hover {
    color: #fff;
  }

  /* Error box */
  .auth-error-box {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.25);
    color: #ef4444;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 12px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1.4;
  }

  /* Submit CTA button */
  .auth-cta-btn {
    background: linear-gradient(90deg, #d4af37 0%, #b8860b 100%);
    border: none;
    border-radius: 12px;
    color: #141414;
    padding: 12px 16px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-top: 8px;
  }

  .auth-cta-btn:hover:not(:disabled) {
    opacity: 0.95;
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.25);
  }

  .auth-cta-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Close & Footer */
  .auth-close-btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.35);
    font-size: 12px;
    cursor: pointer;
    margin-top: 16px;
    align-self: center;
    transition: color 0.2s ease;
  }

  .auth-close-btn:hover {
    color: #fff;
  }

  .auth-footer {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 24px;
    text-align: center;
  }

  .auth-footer-link {
    color: #d4af37;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  .auth-footer-link:hover {
    color: #eedca0;
    text-decoration: underline;
  }

  /* Responsive Media Queries */
  @media (max-width: 768px) {
    .auth-split-wrapper {
      flex-direction: column;
      max-width: 440px;
      min-height: auto;
    }
    
    .auth-left-pane {
      display: none;
    }
    
    .auth-right-pane {
      padding: 32px 24px;
    }
    
    .auth-logo-mobile {
      display: block;
    }
  }
`;

export function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.56.06 2.89.62 3.77 1.81-3.21 1.95-2.69 6.27.68 7.62-.7 1.68-1.57 3.32-3.03 3.54zm-4.32-15.1c-.2-1.6 1.15-3.13 2.68-3.35.43 1.76-1.16 3.26-2.68 3.35z" />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg className="icon-left" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg className="icon-left" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg className="icon-left" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function EyeIcon({ open }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function AuthLeftPane({ isLogin = true, logoSrc }) {
  return (
    <div className="auth-left-pane">
      {logoSrc && <img src={logoSrc} alt="EtherXMeet" className="auth-left-logo" />}
      <div className="auth-left-header">
        <h2 className="auth-feature-title">
          {isLogin ? 'Welcome back to your workspace.' : 'Start collaborating in high-definition.'}
        </h2>
        <p className="auth-feature-desc">
          Run high-quality video rooms, async follow-ups, and interactive recording playbacks from one premium cockpit.
        </p>
      </div>

      <div className="auth-feature-list">
        <div className="auth-feature-item">
          <div className="auth-feature-icon-box">
            <Video size={18} />
          </div>
          <div className="auth-feature-text">
            <h3>Pure Web2 Video Rooms</h3>
            <p>Direct low-latency peer-to-peer conferencing using premium WebRTC egress.</p>
          </div>
        </div>

        <div className="auth-feature-item">
          <div className="auth-feature-icon-box">
            <BarChart2 size={18} />
          </div>
          <div className="auth-feature-text">
            <h3>Speaking Time & Sentiment</h3>
            <p>Get real insights on participation equity, questions asked, and room energy.</p>
          </div>
        </div>

        <div className="auth-feature-item">
          <div className="auth-feature-icon-box">
            <Shield size={18} />
          </div>
          <div className="auth-feature-text">
            <h3>Enterprise Privacy</h3>
            <p>Secure local profile cache and cookie storage ensuring absolute data separation.</p>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 24 }}>
        EtherXMeet © 2026 · Premium Collaboration Cockpit
      </div>
    </div>
  );
}
