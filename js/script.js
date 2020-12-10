var app = new Vue ({
    el: "#app",
    data: {
        titolo: "Max",
        titolo2: "Coach",
        linksheader: [
            'Home',
            'Pages',
            'Courses',
            'Features',
            'Blog',
            'Shop'
        ],
        linkCourses:[
            {
                image: 'course-02-480x298.jpg',
                price: '$40.00',
                title: 'Learning to Write as a Professional Author',
                lessons: '20 lessons',
                students: '50 students'
            },
            {
                image: 'stock-full-hd-03-480x298.jpg',
                price: 'Free',
                title: 'Customer-centric Info-Tech Strategies',
                lessons: '24 lessons',
                students: '769 students'
            },
            {
                image: 'course-02-480x298.jpg',
                price: '$40.00',
                title: 'Learning to Write as a Professional Author',
                lessons: '20 lessons',
                students: '50 students'
            },
            {
                image: 'stock-full-hd-03-480x298.jpg',
                price: 'Free',
                title: 'Customer-centric Info-Tech Strategies',
                lessons: '24 lessons',
                students: '769 students'
            }
        ]
    }
})