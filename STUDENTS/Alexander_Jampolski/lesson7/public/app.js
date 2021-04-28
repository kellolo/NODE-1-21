const App = {
    data() {
        return {
            list: [],
            title: '',
            done: false,
            login: '',
            password: '',
            userLogIn: false,
            user: {}
        }
    },
    methods: {
        async authorization() {
            const data = {
                login: this.login,
                password: this.password
            };
            const res = await fetch('/api/user', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }).then();
            let user = await res.json().then();
            this.user = user.user;
            if (this.user.id) {
                this.userLogIn = true;
                const res = await fetch('/api/list/' + this.user.id);
                this.list = await res.json();
            }
        },
        async createTodoTask() {
            const data = {
                title: this.title,
                done: this.done
            };
            await fetch('/api/list/' + this.user.id, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            this.title = '';
            const res = await fetch('/api/list/' + this.user.id);
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
            const res = await fetch('/api/list/' + this.user.id);
            this.list = await res.json();
        },
        async remove(id) {
            if (confirm("Do you really want to delete?")) {
                await fetch('/api/list/' + id, {
                    method: 'DELETE',
                });
                const res = await fetch('/api/list/' + this.user.id);
                this.list = await res.json();
            }
        }
    },
}

Vue.createApp(App).mount('#app')