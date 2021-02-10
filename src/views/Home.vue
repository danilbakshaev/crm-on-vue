<template>
  <div>
    <div class="page-title">
      <h3>{{ 'page-name_bill' | localize }}</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <HomeBill :rates="currency.conversion_rates" />
      <HomeCurrency
        :rates="currency.conversion_rates"
        :date="currency.time_last_update_utc"
      />
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  name: 'home',
  metaInfo() {
    return {
      title: this.$title('page-name_bill')
    }
  },
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },
  components: {
    HomeBill,
    HomeCurrency
  },
  methods: {
    async refresh() {
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  }
}
</script>
