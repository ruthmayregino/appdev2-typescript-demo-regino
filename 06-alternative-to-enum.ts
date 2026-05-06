(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'janitor' | 'teacher' | 'student' = 'admin'

    userRole = 'janitor'
    // anotherUserRole = 'superadmin'

    function access(role: 'admin' | 'janitor' | 'teacher' | 'student') {
        // ...
    }
})