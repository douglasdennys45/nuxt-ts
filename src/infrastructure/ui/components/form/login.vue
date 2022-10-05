<template>
  <form>
    <div className="header">
      <div className="logo-container">
        <img :src="logo" alt="logo" />
      </div>
      <h5>Log in</h5>
    </div>
    <div className="content">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="exemplo@exemplo.com"
          name="email"
          ref={register}
        />
        <span className="input-group-addon">
          <i className="zmdi zmdi-account-circle" />
        </span>
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="*******"
          className="form-control"
          name="password"
          ref={register}
        />
        <span className="input-group-addon">
          <i className="zmdi zmdi-lock" />
        </span>
      </div>
    </div>
    <div className="footer text-center">
      <button
        id="save"
        type="button"
        class="btn btn-primary btn-round btn-block"
        @click="$emit('login', {})"
      >
        Entrar
      </button>
      <!-- <h5>
        <a href="/recuperacao" className="link">
          Esqueceu a senha?
        </a>
      </h5> -->
    </div>
  </form>

    <!-- <div>Login</div>
    <input type="text" name="username" />
    <input type="password" name="password" />
    <button id="save" type="button" @click="$emit('login', {})">Login</button> -->
</template>

<script setup lang="ts">
import logo from '~~/src/infrastructure/ui/assets/images/logo.svg'
defineEmits(['login'])
</script>
