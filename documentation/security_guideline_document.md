# Security Guidelines for `hero-section-enhancer` (Codeguide Starter Fullstack)

This document outlines the key security principles and practical recommendations for the **hero-section-enhancer** repository. It ensures that the full-stack Next.js 15 template remains secure by design, from development through deployment.

---

## 1. Authentication & Access Control

- **Use Better Auth Securely**
  - Enforce strong password policies (minimum length ≥ 12, mix of uppercase, lowercase, digits, symbols).
  - Ensure unique, per‐user salts and a modern hashing algorithm (e.g., bcrypt, Argon2).
- **Session Management**
  - Store session identifiers in `HttpOnly`, `Secure`, `SameSite=Strict` cookies.
  - Implement both idle (e.g., 15 min) and absolute (e.g., 24 h) timeouts.
  - Rotate session identifiers on privilege elevation and logout to prevent fixation.
- **JWT Configuration (if used)**
  - Avoid the “none” algorithm and enforce HS256/RS256 with proper key management.
  - Validate `exp`, `nbf`, and `aud` claims on every request.
- **Role-Based Access Control (RBAC)**
  - Define clear roles (e.g., `guest`, `user`, `admin`).
  - Perform server-side authorization checks on every protected page (e.g., `/dashboard`).
- **Multi-Factor Authentication (MFA)**
  - Consider integrating MFA (e.g., TOTP, SMS) for administrative or high-sensitivity operations.

---

## 2. Input Handling & Processing

- **Server-Side Validation Only**
  - Reject malformed or out-of-range data on the server, even if front-end validation exists.
- **Prevent Injection**
  - Use parameterized queries via Drizzle ORM to avoid SQL injection.
  - Sanitize any dynamic content (URLs, form fields) to prevent command injection.
- **Mitigate XSS**
  - Apply context-aware encoding (`<`, `>`, `&`, `