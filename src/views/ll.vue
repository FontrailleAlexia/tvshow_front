<template>
    <div class="container">
        <h1 v-if="mode == 'login'">Connexion</h1>
        <h1 v-else>Inscription</h1>
        <p v-if="mode == 'login'">
            Tu n'as pas encore de compte ?
            <span @click="switchToCreateAccount()">Créer un compte</span>
        </p>
        <p v-else>
            Tu as déjà un compte ?
            <span @click="switchToLogin()">Se connecter</span>
        </p>
        <div class="login">
            <div class="login__field">
                <font-awesome-icon icon="fa-solid fa-envelope" class="login__icon fas fa-user" />
                <input
                    v-model="email"
                    class="login__input"
                    type="text"
                    placeholder="Adresse mail"
                />
            </div>
            <div class="login__field" v-if="mode == 'create'">
                <input v-model="firstname" class="login__input" type="text" placeholder="Prénom" />
                <input v-model="lastname" class="login__input" type="text" placeholder="Nom" />
            </div>
            <div class="login__field">
                <input
                    v-model="password"
                    class="login__input"
                    type="password"
                    placeholder="Mot de passe"
                />
            </div>
            <div
                class="login__field"
                v-if="mode == 'login' && status == 'error_login'"
            >Adresse mail et/ou mot de passe invalide</div>
            <div
                class="login__field"
                v-if="mode == 'create' && status == 'error_create'"
            >Adresse mail déjà utilisée</div>
            <div class="form-row">
                <button
                    @click="login()"
                    class="button login__submit"
                    :class="{ 'button--disabled': !validatedFields }"
                    v-if="mode == 'login'"
                >
                    <span v-if="status == 'loading'">Connexion en cours...</span>
                    <span v-else>Connexion</span>
                </button>
                <button
                    @click="createAccount()"
                    class="button login__submit"
                    :class="{ 'button--disabled': !validatedFields }"
                    v-else
                >
                    <span v-if="status == 'loading'">Création en cours...</span>
                    <span v-else>Créer mon compte</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Login',
    data: function () {
        return {
            mode: 'login',
            email: '',
            firstname: '',
            lastname: '',
            password: '',
        }
    },
    mounted: function () {
        if (this.$store.state.user.userId != -1) {
            this.$router.push('/profile');
            return;
        }
    },
    computed: {
        validatedFields: function () {
            if (this.mode == 'create') {
                if (this.email != "" && this.firstname != "" && this.lastname != "" && this.password != "") {
                    return true;
                } else {
                    return false;
                }
            } else {
                if (this.email != "" && this.password != "") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        ...mapState(['status'])
    },
    methods: {
        switchToCreateAccount: function () {
            this.mode = 'create';
        },
        switchToLogin: function () {
            this.mode = 'login';
        },
        login: function () {
            const self = this;
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
            }).then(function () {
                self.$router.push('/profile');
            }, function (error) {
                console.log(error);
            })
        },
        createAccount: function () {
            const self = this;
            this.$store.dispatch('createAccount', {
                email: this.email,
                lastname: this.lastname,
                firstname: this.firstname,
                password: this.password,
            }).then(function () {
                self.login();
            }, function (error) {
                console.log(error);
            })
        },
    }
}
</script>

<style scoped>
.form-row {
    display: flex;
    margin: 16px 0px;
    gap: 16px;
    flex-wrap: wrap;
}
.form-row__input {
    padding: 8px;
    border: none;
    border-radius: 8px;
    background: #f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex: 1;
    min-width: 100px;
    color: black;
}
.form-row__input::placeholder {
    color: #aaaaaa;
}
</style>