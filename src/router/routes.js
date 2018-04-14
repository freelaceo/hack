const Welcome = () => import('@/pages/welcome').then(m => m.default || m)
const Login = () => import('@/pages/auth/login').then(m => m.default || m)
const Register = () => import('@/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('@/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('@/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('@/pages/errors/404').then(m => m.default || m)

const Home = () => import('@/pages/home').then(m => m.default || m)
//Settings
const Settings = () => import('@/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('@/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('@/pages/settings/password').then(m => m.default || m)
const SettingsSchedule = () => import('@/pages/settings/schedule').then(m => m.default || m)
const SettingsUpvoted = () => import('@/pages/settings/upvoted').then(m => m.default || m)
const SettingsBadges = () => import('@/pages/settings/badges').then(m => m.default || m)
const SettingsEditProfile = () => import('@/pages/settings/edit_profile').then(m => m.default || m)
// Hackathons
const Hackathons = () => import('@/pages/hackathons/index').then(m => m.default || m)
const HackathonsCreate = () => import('@/pages/hackathons/step_1').then(m => m.default || m)
const HackathonsEdit = () => import('@/pages/hackathons/edit').then(m => m.default || m)

// Home Page
const HomePage = () => import('@/pages/homepage/index').then(m => m.default || m)

// User Profile
const UserProfile = () => import('@/pages/user-profile').then(m => m.default || m)

// User Profile
const ProjectPage = () => import('@/pages/project-page').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },
  { path: '/home/:id', name: 'home', component: Home },
  { path: '/edit/:id', name: 'edit', component: HackathonsEdit },
  //Settings
  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword },
      { path: 'schedule', name: 'settings.schedule', component: SettingsSchedule },
      { path: 'upvoted', name: 'settings.upvoted', component: SettingsUpvoted },
      { path: 'badges', name: 'settings.badges', component: SettingsBadges },
      { path: 'edit/profile', name: 'settings.edit.profile', component: SettingsEditProfile }
    ] },
    // Hackathons
    { path: '/hackathons',
      component: Hackathons,
      children: [
        { path: '', redirect: { name: 'hackathons.create' } },
        { path: 'create', name: 'hackathons.create', component: HackathonsCreate },
        { path: 'password', name: 'settings.password', component: SettingsPassword },
        { path: 'schedule', name: 'settings.schedule', component: SettingsSchedule },
        { path: 'upvoted', name: 'settings.upvoted', component: SettingsUpvoted },
        { path: 'badges', name: 'settings.badges', component: SettingsBadges }
      ] },
      {path:'/explore',name:'home-page',component:HomePage},
      {path:'/user',name:'user-profile',component:UserProfile},
      {path:'/project',name:'project-page',component:ProjectPage},

  { path: '*', component: NotFound }
]
