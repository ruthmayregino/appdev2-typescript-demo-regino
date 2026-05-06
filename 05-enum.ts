(() => {
    enum Role {
        // SuperAdmin,
        // SuperAdmin = 1,
        SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
        // Janitor
        Janitor = 'Janitor'
    }

    // let userRole: Role = 0;
    let userRole: Role = Role.Janitor;
})