flowchart TD
    Start[Start]
    Start --> AppPage[app slash page tsx]
    AppPage --> CheckSession{session exists}
    CheckSession -- No --> LoggedOutHero[GuestHero section]
    CheckSession -- Yes --> LoggedInHero[UserHero section]
    LoggedOutHero --> SignUp[Sign up flow]
    LoggedOutHero --> SignIn[Sign in flow]
    SignUp --> Dashboard[Dashboard page]
    SignIn --> Dashboard
    LoggedInHero --> Dashboard
    Dashboard --> End[End]