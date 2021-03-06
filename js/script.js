var app = new Vue ({
    el: "#app",
    data: {
        // header
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
        // main section4
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
        ],
        // main section6
        linkBlogs:[
            {
                image: 'artist-blog-03-480x325.jpeg',
                profession: 'ARTIST',
                title: 'Brush Strokes Energize Trees in Paintings',
                date: 'May 15, 2020',
                views: '688 views'
            },
            {
                image: 'artist-blog-01-480x325.jpg',
                profession: 'ARTIST',
                title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                date: 'May 15, 2020',
                views: '603 views'
            },
            {
                image: 'artist-blog-02-480x325.jpg',
                profession: 'ARTIST',
                title: 'Connection Between Self-Portraits and Identity',
                date: 'May 15, 2020',
                views: '397 views'
            }
        ],
        // main section7
        learn:[
            {
                image: 'client-logo-colored-03.png',
                title: 'Idea Discussion',
                info: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
            },
            {
                image: 'client-logo-colored-03.png',
                title: 'Web Development',
                info: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
            },
            {
                image: 'client-logo-colored-03.png',
                title: 'System Administration',
                info: 'Learners are encouraged to study the mechanism and structure of system administration.'
            },
            {
                image: 'client-logo-colored-03.png',
                title: 'Graphic Design',
                info: 'Have a passion for graphics and arts? Show your talents wwith confidence and self-assertiveness.'
            }
        ],
        // footer
        titolofooter1: "Address",
        indirizzo: "382 NE 191st St # 87394 Miami, FL 33179-3899",
        opening: "+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)",
        footeremail: "support@maxcoach.com",
        titolofooter2: "Explore",
        explore1: [
            'Start here',
            'Blog',
            'ABout us'
        ],
        explore2: [
            'Success story',
            'Courses',
            'Contact us'
        ],
        titolofooter3: "Information",
        information1: [
            'Membership',
            'Purchase guide',
            'Privacy policy',
            'Terms of services'
        ],
        footerUltimate: "2020 Maxcoach. All Rights Reserved"
    }
})