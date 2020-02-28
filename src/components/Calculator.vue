<template>
  <div class="row">
    <div class="col">
      <h4 class="mb-3 pl-0">{{ syrup.name }}</h4>
      <p>
        Sadržaj lijeka u 1 ml: {{ syrup.medicineContent }} mg
        <br>
        Manja doza: {{ syrup.dosage.small }} mg po Kg
        <br>
        Veća doza: {{ syrup.dosage.large }} mg po Kg
      </p>
      <p>
        Potrebna doza za danu kilažu u mg:
      </p>
      <ul>
        <li>
          <strong>manja:</strong> ({{ syrup.dosage.small }} mg * {{ kilograms }} Kg):
          {{ syrup.dosage.small * kilograms }} mg
        </li>
        <li>
          <strong>veća:</strong> ({{ syrup.dosage.large }} mg * {{ kilograms }} Kg):
          {{ syrup.dosage.large * kilograms }} mg
        </li>
      </ul>
      <p>
        Potrebna doza za danu kilažu u ml:
      </p>
      <ul>
        <li>
          <strong>manja:</strong> ({{ syrup.dosage.small }} mg * {{ kilograms }} Kg / {{ syrup.medicineContent }} mg):
          {{ Math.round(syrup.dosage.small * kilograms / syrup.medicineContent * 100) / 100 }}  ml
        </li>
        <li>
          <strong>veća:</strong> ({{ syrup.dosage.large }} mg * {{ kilograms }} Kg / {{ syrup.medicineContent }} mg):
          {{ Math.round(syrup.dosage.large * kilograms / syrup.medicineContent * 100) / 100 }}  ml
        </li>
      </ul>
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
 //               validator: function (value) {
                    //const kilograms = parseFloat(value);
                    //return kilograms > 0 && kilograms < 50;
        //            return true;
   //             }
            },
            syrup: Object
        }

    }
</script>

<style scoped>

</style>