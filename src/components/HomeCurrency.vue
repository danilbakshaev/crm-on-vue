<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">{{
            'comp-homecurrency_ex-rates' | localize
          }}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>{{ 'comp-homecurrency_currency' | localize }}</th>
              <th>{{ 'comp-homecurrency_rates' | localize }}</th>
              <th>{{ 'comp-homecurrency_date' | localize }}</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cur in currencies" :key="cur">
              <td>{{ cur }}</td>
              <td>{{ rates[cur] }}</td>
              <td>{{ date | date('date') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates', 'date'],
  data: () => ({
    currencies: ['RUB', 'USD', 'EUR']
  })
}
</script>
