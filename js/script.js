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
                image: 'stock-full-hd-04-480x298.jpg',
                price: '$19.00',
                title: 'Opening Programming Courses for Everyone: Python',
                lessons: '17 lessons',
                students: '62 students'
            },
            {
                image: 'stock-full-hd-06-480x298.jpg',
                price: '$26.00',
                title: 'Accademic Listening and Note-taking',
                lessons: '14 lessons',
                students: '67 students'
            },
            {
                image: 'course-featured-image-01-480x298.jpg',
                price: '$39.00',
                title: 'Master jQuery in a Short Period of Time',
                lessons: '6 lessons',
                students: '51 students'
            },
            {
                image: 'stock-full-hd-05-480x298.jpg',
                price: '$59.00',
                title: 'Introduction to Javascript for Beginners',
                lessons: '14 lessons',
                students: '76 students'
            }
        ]
    }
})