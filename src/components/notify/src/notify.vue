<template>
  <transition
    :enter-active-class="enterActiveClass"
    :leave-active-class="leaveActiveClass"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
  >
    <div
      class="iam notify"
      :class="[
        type ? type : ''
      ]"
      v-if="show"
    >
      <button
        type="button"
        class="notify-close"
        role="button"
        @click="hideNotify"
        v-if="closeButton"
      >
        <i class="iam-icon-close"></i>
      </button>

      <div
        class="notify-progress"
        v-if="progressBar"
        :style="'width: ' + progress.percent + '%'"
      ></div>

      <div
        class="notify-icon"
        v-if="getIcon"
      >
        <i :class="getIcon"></i>
      </div>

      <div class="notify-content">
        <div class="notify-title">{{title}}</div>
        <div class="notify-message">{{message}}</div>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'iamNotify',
  componentName: 'iamNotify',
  data () {
    return {
      progress: {
        hideEta: 0,
        percent: 0,
        intervalId: null
      },
      show: false,
      defaultIcons: {
        success: 'iam-icon-check-circle',
        info: 'iam-icon-info',
        warning: 'iam-icon-alert-triangle',
        error: 'iam-icon-alert-circle'
      }
    }
  },
  props: {
    type: {
      type: String
    },
    position: {
      type: String,
      default: 'bottom right'
    },
    title: {
      type: String
    },
    message: {
      type: String
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    progressBar: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    showMethod: {
      type: String,
      default: 'fade in'
    },
    hideMethod: {
      type: String,
      default: 'fade out'
    },
    duration: {
      default: 4500
    },
    showDuration: Number,
    hideDuration: Number,
    delay: {
      default: 0
    }
  },
  beforeMount () {
    let toastContainer = document.querySelector(`.iam-notify-container.${this.positionClass}`)
    if (!toastContainer) {
      toastContainer = document.createElement('div')
      toastContainer.classList.add('iam-notify-container')
      toastContainer.classList.add(`${this.positionClass}`)
      document.body.appendChild(toastContainer)
    }
    toastContainer.appendChild(this.$el)
  },
  mounted () {
    setTimeout(() => this.showNotify(), this.delay)
  },
  computed: {
    positionClass () {
      return this.position.split(' ').join('-')
    },
    enterActiveClass () {
      return 'animation ' + this.showMethod
    },
    leaveActiveClass () {
      return 'animation ' + this.hideMethod
    },
    getIcon () {
      if (this.icon) return this.icon
      return this.defaultIcons[this.type]
    }
  },
  methods: {
    showNotify () {
      this.show = true
      if (this.duration !== 0) {
        this.sto = setTimeout(() => this.hideNotify(), this.duration)
        if (this.progressBar) {
          this.progress.hideEta = new Date().getTime() + parseFloat(this.duration)
          this.progress.intervalId = setInterval(() => this.refreshProgress(), 10)
        }
      }
    },
    hideNotify () {
      clearTimeout(this.sto)
      clearTimeout(this.progress.intervalId)
      this.show = false
    },
    refreshProgress () {
      this.progress.percent = ((this.progress.hideEta - (new Date().getTime())) / this.duration) * 100
    },
    beforeEnter (el) {
      if (this.showDuration) {
        el.style.animationDuration = this.showDuration + 's'
      }
    },
    afterEnter () {
    },
    beforeLeave (el) {
      this.$el.style.zIndex = 0
      if (this.hideDuration) {
        el.style.animationDuration = this.hideDuration + 's'
      }
    },
    afterLeave () {
    }
  }
}

</script>
