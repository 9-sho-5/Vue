const Gallery = {
    data() {
        return {
        category: '',
        images: [
            { index: 1,
            src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            category: "Dog"
            },
            { index: 2,
            src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80",
            category: "Cat"
            },
            { index: 3,
            src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            category: "Dog"
            },
            { index: 4,
            src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            category: "Cat"
            },
            { index: 5,
            src: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            category: "Cat"
            },
            { index: 6,
            src: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            category: "Dog"
            },
        ]
        };
    },
    computed: {
        filterByCategory: function () {
            return this.images.filter(
            (image) => !image.category.indexOf(this.category)
            );
        }
    }
};
Vue.createApp(Gallery).mount("#app");