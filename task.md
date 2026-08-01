# DeutschPixel — Task Tracker

> **Status**: 🟡 Architecture Approved → Ready to Build
> **Last Updated**: Day 1, Pre-coding

---

## Day 1 — Foundation + Authentication

### Phase 1: Project Scaffolding (Hours 1–2)
- [ ] Initialize Git repository
- [ ] Create Vite React app in `client/`
- [ ] Create Express app in `server/`
- [ ] Set up `.gitignore` (node_modules, .env, dist)
- [ ] Set up `.env` files (client + server)
- [ ] Configure MongoDB Atlas connection in `server/config/db.js`
- [ ] Configure CORS, JSON parsing, error handling in `server/server.js`
- [ ] Verify both apps run locally
- [ ] **Commit**: `chore: initialize project with Vite + Express + MongoDB`

### Phase 2: Design System (Hours 2–3)
- [ ] Create `client/src/styles/variables.css` — all CSS custom properties (colors, spacing, typography, shadows, radii)
- [ ] Create `client/src/styles/global.css` — CSS reset, base styles, utility classes
- [ ] Import Google Fonts (Inter or similar)
- [ ] Define dark mode variables (`:root` + `[data-theme="dark"]`)
- [ ] **Commit**: `style: add design system with CSS custom properties and dark mode tokens`

### Phase 3: Common Components (Hours 3–4)
- [ ] `Button` component — primary, secondary, ghost, danger variants + loading state
- [ ] `Input` component — label, placeholder, error state, icon support
- [ ] `Card` component — elevated container with hover effect
- [ ] `Loader` component — spinner/skeleton for async states
- [ ] `Badge` component — colored labels for categories/difficulty
- [ ] **Commit**: `feat(ui): add reusable common components (Button, Input, Card, Loader, Badge)`

### Phase 4: Backend Auth (Hours 4–5)
- [ ] `User` Mongoose model with validation + password hashing (bcrypt pre-save hook)
- [ ] `authController.js` — register, login, getMe
- [ ] `authRoutes.js` — POST /register, POST /login, GET /me
- [ ] `auth.js` middleware — JWT verification
- [ ] `errorHandler.js` middleware — centralized error responses
- [ ] `validate.js` middleware — request body validation
- [ ] Test all auth endpoints with curl/Postman
- [ ] **Commit**: `feat(auth): add JWT authentication with register, login, and protected routes`

### Phase 5: Frontend Auth (Hours 5–6)
- [ ] `AuthContext.jsx` — user state, login/logout/register actions, token persistence
- [ ] `api.js` — Axios instance with baseURL, token interceptor, error interceptor
- [ ] `authService.js` — register, login, getMe API calls
- [ ] `LoginPage.jsx` + CSS — email/password form with validation
- [ ] `RegisterPage.jsx` + CSS — username/email/password form
- [ ] `ProtectedRoute` wrapper component — redirects to login if no auth
- [ ] **Commit**: `feat(auth): add login/register pages with AuthContext and protected routes`

### Phase 6: Layout + Navigation (Hours 6–7)
- [ ] `Navbar` component — logo, nav links, auth state (login/logout), mobile hamburger
- [ ] `PageWrapper` / Layout component with `<Outlet />`
- [ ] React Router setup in `App.jsx` with all route definitions
- [ ] Responsive navbar (desktop + mobile)
- [ ] **Commit**: `feat(layout): add responsive navbar with auth-aware navigation`

### Phase 7: Homepage (Hours 7–8)
- [ ] `HomePage.jsx` — hero section with CTA, feature cards, quick stats
- [ ] Hero section with tagline + "Start Learning" button
- [ ] Feature cards (Browse Vocab, Flashcards, Quiz)
- [ ] Responsive layout (grid on desktop, stack on mobile)
- [ ] **Commit**: `feat(home): add homepage with hero section and feature cards`

---

## Day 2 — Vocabulary + Flashcards

### Phase 8: Word Model + Seed System (Hours 1–2)
- [ ] `Word` Mongoose model with validation
- [ ] `server/seeds/wordSeed.js` — flexible seed script (easy to add new words)
- [ ] Seed initial words (user to provide list)
- [ ] Add seed script to `package.json` (`npm run seed`)
- [ ] **Commit**: `feat(vocab): add Word model and flexible seed system`

### Phase 9: Vocabulary API (Hours 2–3)
- [ ] `vocabController.js` — getAll (paginated), getById, getRandom, getCategories
- [ ] `vocabRoutes.js` — GET endpoints with query params (search, category, difficulty, page, limit)
- [ ] Search implementation (text index or regex)
- [ ] Test all vocab endpoints
- [ ] **Commit**: `feat(api): add vocabulary endpoints with search, filter, and pagination`

### Phase 10: Vocabulary Page UI (Hours 3–5)
- [ ] `vocabService.js` — API call functions
- [ ] `useVocab.js` hook — manages words, filters, search, loading, pagination
- [ ] `SearchBar` component — debounced search input
- [ ] `FilterBar` component — category + difficulty dropdown/chips
- [ ] `WordCard` component — displays word, article, translation, category badge
- [ ] `WordList` component — grid/list of WordCards
- [ ] `VocabPage.jsx` — assembles all vocab components
- [ ] Responsive grid layout
- [ ] **Commit**: `feat(vocab): add vocabulary browsing page with search, filter, and word cards`

### Phase 11: Flashcard Backend (Hours 5–6)
- [ ] `UserProgress` Mongoose model
- [ ] `progressController.js` — getProgress, updateProgress
- [ ] `progressRoutes.js` — GET /progress, PUT /progress/:wordId
- [ ] Test progress endpoints
- [ ] **Commit**: `feat(flashcard): add UserProgress model and progress tracking API`

### Phase 12: Flashcard UI (Hours 6–8)
- [ ] `useFlashcards.js` hook — deck management, current index, flip state, navigation
- [ ] `FlashcardCard` component — 3D CSS flip animation (front: German, back: English)
- [ ] `DeckControls` component — previous, next, mark known, needs practice
- [ ] `FlashcardDeck` component — orchestrates card + controls
- [ ] `FlashcardsPage.jsx` — category/difficulty selection → deck view
- [ ] Flip animation with `transform: rotateY(180deg)` + `perspective`
- [ ] **Commit**: `feat(flashcard): add flashcard system with 3D flip animation and progress tracking`

---

## Day 3 — Learning Sessions + Profile

### Phase 13: Session Backend (Hours 1–2)
- [ ] `LearningSession` Mongoose model
- [ ] `sessionController.js` — generateQuestions, submitSession
- [ ] Question generation logic:
  - [ ] Article Quiz mode (MCQ: der/die/das)
  - [ ] English→German mode (typing)
  - [ ] German→English mode (typing)
- [ ] XP calculation (server-side)
- [ ] Update user stats (xp, wordsLearned, streak) on session complete
- [ ] `sessionRoutes.js` — POST /sessions, GET /sessions
- [ ] Test session endpoints
- [ ] **Commit**: `feat(session): add 3-mode learning session API with XP and streak system`

### Phase 14: Session UI (Hours 2–4)
- [ ] `useSession.js` hook — question queue, current question, score, timer, submission
- [ ] `sessionService.js` — API calls
- [ ] `QuestionCard` component:
  - [ ] Article Quiz view — show word, 3 article buttons
  - [ ] Typing view — show prompt, text input, submit
  - [ ] Correct/incorrect feedback animation
- [ ] `ProgressBar` component — animated progress through session
- [ ] `ScoreDisplay` component — live score during session
- [ ] `SessionResults` component — final score, XP earned, accuracy, "Play Again"
- [ ] `SessionPage.jsx` — mode selection → quiz → results flow
- [ ] **Commit**: `feat(session): add learning session UI with 3 quiz modes and results screen`

### Phase 15: Profile Backend (Hours 4–5)
- [ ] `userController.js` — getProfile (aggregated stats), getLeaderboard
- [ ] `userRoutes.js` — GET /users/profile, GET /users/leaderboard
- [ ] Streak calculation logic (compare lastActiveDate)
- [ ] Test profile endpoints
- [ ] **Commit**: `feat(profile): add user profile API with aggregated stats and streak`

### Phase 16: Profile UI (Hours 5–6)
- [ ] `userService.js` — API calls
- [ ] `StatsGrid` component — XP, words learned, accuracy, streak in card grid
- [ ] `StreakDisplay` component — fire emoji + streak count + motivational text
- [ ] `SessionHistory` component — list of recent sessions with scores
- [ ] `ProfilePage.jsx` — assembles all profile components
- [ ] **Commit**: `feat(profile): add user profile page with stats, streak, and session history`

### Phase 17: Dark Mode (Hours 6–7)
- [ ] `ThemeContext.jsx` — theme state, toggle function, localStorage persistence
- [ ] Theme toggle button in Navbar
- [ ] Apply `[data-theme="dark"]` CSS variables throughout
- [ ] Test all pages in both themes
- [ ] **Commit**: `feat(theme): add dark mode with persistent theme toggle`

### Phase 18: Error Handling + Edge Cases (Hours 7–8)
- [ ] Loading states on all async pages (Loader component)
- [ ] Empty states ("No words found", "Start your first session")
- [ ] Error states (API failures, network errors)
- [ ] `NotFoundPage.jsx` — 404 page
- [ ] Form validation error messages
- [ ] **Commit**: `fix(ux): add loading, empty, and error states across all pages`

---

## Day 4 — Polish + Deploy + Documentation

### Phase 19: Responsive Polish (Hours 1–2)
- [ ] Test every page at 375px (mobile), 768px (tablet), 1200px+ (desktop)
- [ ] Fix any layout issues at each breakpoint
- [ ] Mobile-specific adjustments (touch targets, font sizes, spacing)
- [ ] Test navigation flow on mobile
- [ ] **Commit**: `style(responsive): polish all pages for mobile and tablet`

### Phase 20: Animation + Micro-interactions (Hours 2–3)
- [ ] Page transition animations (fade in)
- [ ] Button hover/active effects
- [ ] Card hover lift effect
- [ ] Score count-up animation on session results
- [ ] XP bar fill animation
- [ ] Streak fire animation (subtle pulse)
- [ ] Toast/notification for achievements
- [ ] **Commit**: `style(animations): add micro-interactions and page transitions`

### Phase 21: Deployment (Hours 3–4)
- [ ] Prepare `client/` for Vercel deployment
  - [ ] Set production API URL in env
  - [ ] Verify build passes (`npm run build`)
- [ ] Prepare `server/` for Render deployment
  - [ ] Set environment variables (MONGODB_URI, JWT_SECRET, CORS_ORIGIN)
  - [ ] Add start script for production
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Render
- [ ] Test full flow in production
- [ ] **Commit**: `chore(deploy): configure production deployment for Vercel and Render`

### Phase 22: README + Documentation (Hours 4–6)
- [ ] Professional `README.md` with:
  - [ ] Project banner/logo
  - [ ] Badges (tech stack, deploy status)
  - [ ] Screenshots (homepage, vocab, flashcards, quiz, profile)
  - [ ] Features list
  - [ ] Architecture diagram
  - [ ] Tech stack with rationale
  - [ ] Setup instructions (local development)
  - [ ] API documentation (endpoint table)
  - [ ] Folder structure
  - [ ] Environment variables reference
  - [ ] Contributing guidelines
  - [ ] License
- [ ] `ARCHITECTURE.md` — technical deep-dive
- [ ] **Commit**: `docs: add professional README with screenshots and API documentation`

### Phase 23: Bonus Features (Hours 6–7)
- [ ] Leaderboard page — top 10 users by XP
- [ ] Bookmarks — save/unsave words
- [ ] Any remaining polish
- [ ] **Commit**: `feat(bonus): add leaderboard and bookmarks`

### Phase 24: Final Review (Hours 7–8)
- [ ] Full end-to-end test in production
- [ ] Fix any remaining bugs
- [ ] Final screenshots for README
- [ ] Create resume bullet points
- [ ] Prepare interview talking points
- [ ] Clean up any dead code or console.logs
- [ ] Final commit + push to GitHub
- [ ] **Commit**: `chore: final cleanup and production verification`

---

## Progress Summary

| Day | Phase | Status |
|---|---|---|
| **Day 1** | Foundation + Auth | ⬜ Not Started |
| **Day 2** | Vocabulary + Flashcards | ⬜ Not Started |
| **Day 3** | Sessions + Profile | ⬜ Not Started |
| **Day 4** | Polish + Deploy + Docs | ⬜ Not Started |

**Legend**: ⬜ Not Started · 🟡 In Progress · ✅ Complete
