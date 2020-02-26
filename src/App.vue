<template>
  <div id="app">
    <div class="bg-light">
      <div class="container">
        <div class="py-1 text-center">
          <img class="d-block mx-auto mb-4"
               src="./assets/logo.png"
               alt=""
               width="72"
               height="72">
          <h2>Sirup</h2>
          <p class="lead">
            <small>
              Izračun doze sirupa (ml) prema kilaži djeteta
            </small>
          </p>
        </div>

        <div class="row">
          <div class="col"></div>
          <div class="col-2">
            <label for="firstName" class="lead">Kilaža</label>
            <input type="number"
                   min="3"
                   max="100"
                   step="0.1"
                   class="form-control form-control-lg"
                   id="kilaza"
                   placeholder="Unesite kilažu (broj)"
                   value="13.5"
                   required
                   style="text-align: center;">
          </div>
          <div class="col"></div>
        </div>

        <div class="m-4 text-warning">
          TODO mivanci prikaz greške
        </div>

        <div class="row mt-3">
          <div class="col">
            <h4 class="mb-3">Paracetamol</h4>
          </div>

          <div class="col">
            <h4>Ibuprofen</h4>
          </div>
        </div>

        <div class="row">
          <div class="col">
            TODO mivanci općenite informacije o temperaturi
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p>
              TODO mivanci odricanje od odgovornosti
            </p>
          </div>
        </div>

        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">
            &copy; Sirup
          </p>
          <p>
            <small>
              Ikone izradila <a href="https://www.flaticon.com/authors/nikita-golubev"
                                title="Nikita Golubev">Nikita Golubev</a>, dostupno na
              <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </small>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'Sirup',
        components: {}
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
</style>
