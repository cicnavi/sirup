<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3 pl-0">{{ syrup.name }}</h4>

      <p>
        manja doza: {{ dosageMlSmall }} ml
        <br>
        veća doza: {{ dosageMlLarge }} ml
      </p>
      <p>
        <button class="btn btn-light" 
          type="button" 
          data-toggle="collapse" 
          :data-target="'#collapse_' + syrup.name" 
          aria-expanded="false" 
          :aria-controls="'collapse_' + syrup.name">
          Izračun
        </button>
      </p>
      <div class="collapse" :id="'collapse_' + syrup.name">
        <p class="text-muted">
          Sadržaj lijeka u 1 ml sirupa: {{ syrup.medicineContent }} mg
          <br>
          Manja doza lijeka: {{ syrup.dosage.small.amount }} mg po Kg
          (do {{ syrup.dosage.small.dailyDosages }}x u 24 h)
          <br>
          Veća doza lijeka: {{ syrup.dosage.large.amount }} mg po Kg
          (do {{ syrup.dosage.large.dailyDosages }}x u 24 h)
        </p>
        <p>
          <strong>Potrebna doza lijeka za danu kilažu, u mg</strong>
        </p>
        <ul style="list-style: none;">
          <li>
            <strong>manja:</strong> ({{ syrup.dosage.small.amount }} mg * {{ kilograms }} Kg):
            {{ dosageMgSmall }} mg
          </li>
          <li>
            <strong>veća:</strong> ({{ syrup.dosage.large.amount }} mg * {{ kilograms }} Kg):
            {{ dosageMgLarge }} mg
          </li>
        </ul>
        <p>
          <strong>Potrebna doza sirupa za danu kilažu, u ml</strong>
        </p>
        <ul style="list-style: none;">
          <li>
            <strong>manja:</strong> ({{ syrup.dosage.small.amount }} mg * {{ kilograms }} Kg / {{ syrup.medicineContent }} mg):
            {{ dosageMlSmall }}  ml
          </li>
          <li>
            <strong>veća:</strong> ({{ syrup.dosage.large.amount }} mg * {{ kilograms }} Kg / {{ syrup.medicineContent }} mg):
            {{ dosageMlLarge }}  ml
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Calculator",
        props: {
            kilograms: {
                required: true,
            },
            syrup: Object
        },
        computed: {
          dosageMgSmall() {
            return this.syrup.dosage.small.amount * this.kilograms;
          },
          dosageMgLarge() {            
            return this.syrup.dosage.large.amount * this.kilograms;
          },
          dosageMlSmall() {
            const amount = this.dosageMgSmall / this.syrup.medicineContent;
            return this.round(amount);
          },
          dosageMlLarge() {
            const amount = this.dosageMgLarge / this.syrup.medicineContent;
            return this.round(amount);
          }
        },
        methods: {
          round(amount) {
            return Math.round(amount * 100) / 100;
          }
        }
    }
</script>

<style scoped>

</style>