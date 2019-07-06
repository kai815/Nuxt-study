
<template>
    <div>
        <h2>認証が必要ななページ</h2>
        <p>
           Cookieの'credential'値がTruthyな場合のみアクセス可能です。<br>
           <nuxt-link to='/'>TOPへ戻る</nuxt-link>
        </p>
    </div>
</template>

<script>
import Cookies from 'universal-cookie'
export default {
    methods: {
        login() {
            const cookies = new Cookies()
            cookies.set('credential', 'true', {maxAge: 90})
            this.$router.push('/')
        }
    }
}
</script>