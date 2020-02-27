<template>
  <div class="row">
    <div class="col">
      <h4 class="mb-3">{{ syrup.name }}</h4>
      <p>
        Sadržaj lijeka (mg u 1 ml): {{ syrup.medicineContent }}
        <br>
        Manja doza (mg po Kg): {{ syrup.dosage.small }}
        <br>
        Veća doza (mg po Kg): {{ syrup.dosage.large }}
      </p>
      <p>
        TODO mivanci izračun
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Calculator",
        props: {
            kilograms: {
                required: true,
                default: 0,
                validator: function (value) {
                    const kilograms = parseFloat(value);
                    return kilograms > 0 && kilograms < 50;
                }
            },
            syrup: Object
        }

    }
</script>

<style scoped>

</style>