<template>
    <div class="iam-input-number" :class="{'int-pm-vertical': vertical}">
        <div class="iam-input-number__value">
            <slot>{{ intValue }}</slot>
        </div>
        <div class="iam-input-number__button" :class="getBtnClass(true)" @click="vertical ? increment() : decrement()">
            <slot :name="vertical ? 'increment' : 'decrement'">{{ vertical ? '+' : '-' }}</slot>
        </div>
        <div class="iam-input-number__separator">/</div>
        <div class="iam-input-number__button" :class="getBtnClass(false)" @click="vertical ? decrement() : increment()">
            <slot :name="vertical ? 'decrement' : 'increment'">{{ vertical ? '-' : '+' }}</slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'iamInputNumber',
  props: {
    value: {
      default: 0,
      type: Number
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: undefined,
      type: Number
    },
    step: {
      default: 1,
      type: Number
    },
    vertical: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      intValue: 0
    }
  },
  computed: {
    canIncrement () {
      return (this.max === undefined || ((this.intValue + this.step) <= this.max))
    },
    canDecrement () {
      return ((this.intValue - this.step) >= this.min)
    }
  },
  methods: {
    getBtnClass (firstBtn) {
      let btnClass = 'iam-input-number'
      if ((firstBtn && !this.vertical) || (!firstBtn && this.vertical)) {
        btnClass += 'decrement'
        if (!this.canDecrement) btnClass += ' disabled'
      } else {
        btnClass += 'increment'
        if (!this.canIncrement) btnClass += ' disabled'
      }
      return btnClass
    },
    increment () {
      if (this.canIncrement) {
        this.intValue = this.intValue + this.step
        this.$emit('ipm-increment', this.intValue)
        this.$emit('input', this.intValue)
      }
    },
    decrement () {
      if (this.canDecrement) {
        this.intValue = this.intValue - this.step
        this.$emit('ipm-decrement', this.intValue)
        this.$emit('input', this.intValue)
      }
    }
  },
  watch: {
    value: {
      handler: function (newVal) {
        this.intValue = newVal
      }
    }
  },
  created () {
    this.intValue = this.value
    if (this.step < 1) this.step = 1
    if (this.max < this.min) this.max = undefined
  }
}
</script>
