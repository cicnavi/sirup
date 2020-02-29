<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 pl-0">{{ syrup.name }}</h4>
      <p class="text-muted">
        Sadržaj lijeka u 1 ml sirupa: {{ syrup.medicineContent }} mg
        <br>
        Manja doza lijeka: {{ syrup.dosage.small.ammount }} mg po Kg
        (do {{ syrup.dosage.small.dailyDosages }}x u 24 h)
        <br>
        Veća doza lijeka: {{ syrup.dosage.large.ammount }} mg po Kg
        (do {{ syrup.dosage.large.dailyDosages }}x u 24 h)
      </p>
      <p>
        <strong>Potrebna doza lijeka za danu kilažu, u mg</strong>
      </p>
      <ul style="list-style: none;">
        <li>
          <strong>manja:</strong> ({{ syrup.dosage.small.ammount }} mg * {{ kilograms }} Kg):
          {{ syrup.dosage.small.ammount * kilograms }} mg
        </li>
        <li>
          <strong>veća:</strong> ({{ syrup.dosage.large.ammount }} mg * {{ kilograms }} Kg):
          {{ syrup.dosage.large.ammount * kilograms }} mg
        </li>
      </ul>
      <p>
        <strong>Potrebna doza sirupa za danu kilažu, u ml</strong>
      </p>
      <ul style="list-style: none;">
        <li>
          <strong>manja:</strong> ({{ syrup.dosage.small.ammount }} mg * {{ kilograms }} Kg / {{ syrup.medicineContent }} mg):
          {{ Math.round(syrup.dosage.small.ammount * kilograms / syrup.medicineContent * 100) / 100 }}  ml
        </li>
        <li>
          <strong>veća:</strong> ({{ syrup.dosage.large.ammount }} mg * {{ kilograms }} Kg / {{ syrup.medicineContent }} mg):
          {{ Math.round(syrup.dosage.large.ammount * kilograms / syrup.medicineContent * 100) / 100 }}  ml
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