const App = {
    data() {
        return {
            list: [],
            title: '',
            done: false
        }
    },
    methods: {
        async createTodoTask() {
            const data = {
                title: this.title,
                done: this.done
            };
            await fetch('/api/list', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            this.title = '';
            const res = await fetch('/api/list');
            this.list = await res.json();
        },
        async update(id, done) {
            const data = {
                done: !done
            };
            await fetch('/api/list/' + id, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const res = await fetch('/api/list');
            this.list = await res.json();
        },
        async remove(id) {
            if (confirm("Do you really want to delete?")) {
                await fetch('/api/list/' + id, {
                    method: 'DELETE',
                });
                const res = await fetch('/api/list');
                this.list = await res.json();
            }
        }
    },
    async mounted() {
        const res = await fetch('/api/list');
        this.list = await res.json();
    }
}

Vue.createApp(App).mount('#app')