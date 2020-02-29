<template>
  <div id="app">
    <div class="">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">            
            <div class="py-1 text-center">
              <img class="d-block mx-auto mb-4"
                  src="./assets/logo.png"
                  alt=""
                  width="72"
                  height="72">
              <h2>Sirup</h2>
              <p class="lead">
                <small>
                  Izračun doze sirupa u mg i ml prema kilaži djeteta
                </small>
              </p>
            </div>
          </div>

          <div class="col-sm-6">
            <Disclaimer></Disclaimer>
          </div>
        </div>

        <div class="row">
          <div class="col-2 col-sm-2 col-md-2"></div>
          <div class="col-8 col-sm-8 col-md-8">
            <label class="lead">Kilaža (Kg)</label>
            <input type="number"
                   min="0"
                   max="100"
                   step="0.1"
                   class="form-control form-control-lg"
                   v-model="validatedKilograms"
                   placeholder="unesite broj"
                   required
                   style="text-align: center;">
          </div>
          <div class="col-2 col-sm-2 col-md-2"></div>
        </div>

        <div class="m-4 text-warning text-center"
          v-if="error">
          {{ error }}
        </div>
        
        <div class="row mt-3">
          <div class="col-md-12 col-lg-6">
            <Calculator
                v-bind:kilograms="validatedKilograms"
                v-bind:syrup="syrups.paracetamol"
            ></Calculator>
          </div>
          <div class="col-md-12 col-lg-6">
            <Calculator
                v-bind:kilograms="validatedKilograms"
                v-bind:syrup="syrups.ibuprofen"
            ></Calculator>
          </div>
        </div>

        <Information></Information>

        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
    import Calculator from "./components/Calculator";
    import Information from "./components/Information";
    import Disclaimer from "./components/Disclaimer";
    import Footer from "./components/Footer";

    export default {
        name: 'Sirup',
        data: function () {
          return {
            error: null,
            kilograms: 13.5,
            syrups: {
              paracetamol: {
                name: 'Paracetamol',
                medicineContent: 24, // 24 mg of medicine in 1 ml
                dosage: {
                  small: {
                    ammount: 10, // 10 mg of medicine per 1 Kg
                    dailyDosages: 6
                  },
                  large: {
                    ammount: 15, // 15 mg of medicine per 1 Kg
                    dailyDosages: 4
                  }
                }
              },
              ibuprofen: {
                name: 'Ibuprofen',
                medicineContent: 20, // 20 mg of medicine in 1 ml
                dosage: {
                  small: {
                    ammount: 5, // 5 mg of medicine per 1 Kg
                    dailyDosages: 3
                  },
                  large: {
                    ammount: 10, // 10 mg of medicine per 1 Kg
                    dailyDosages: 3
                  },
                }
              }
            }
          }
        },
        components: {
            Disclaimer,
            Information,
            Footer,
            Calculator
        },
        computed: {
            validatedKilograms: {
                // getter
                get: function () {
                    return this.kilograms;
                },
                // setter
                set: function (value) {
                    // TODO regex validation
                   const errorMessage = 'Vrijednost kilograma nije ispravna. ' +
                    'Za decimalne brojeve koristiti točku. Izračun je do 30 Kg.';
                                      
                    if (value.length > 4) {
                      this.error = errorMessage;
                      this.kilograms = '';
                      return;
                    }

                    const kilograms = parseFloat(value);
                    
                    if (isNaN(kilograms) || kilograms < 0 || kilograms > 30) {
                        this.kilograms = '';
                        this.error = errorMessage;
                        return;
                    } else {
                        this.error = null;
                        this.kilograms = value;
                    }
                }
            }
        }
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
