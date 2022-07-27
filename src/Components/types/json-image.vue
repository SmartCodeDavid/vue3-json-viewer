<script>
import { h } from "vue";
export default {
  name: "JsonImage",
  functional: true,
  props: {
    jsonValue: {
      type: [String, Blob],
      required: true,
    },
    popup: Boolean,
  },
  methods: {
    toggle() {
      // emit popup event to show image/video
      this.$emit("update:popup", true);
      this.dispatchEvent();
    },
    dispatchEvent() {
      try {
        this.$el.dispatchEvent(
          new CustomEvent('popup', {
            detail: this.jsonValue,
          })
        );
      } catch (e) {
        // handle IE not supporting Event constructor
        var evt = document.createEvent("Event");
        evt.initEvent("resized", true, false);
        this.$el.dispatchEvent(evt);
      }
    },
  },
  render() {
    return h("span", {
      class: {
        "jv-item": true,
        "jv-image": true,
      },
      onClick: this.toggle,
      innerText: `click to show the image/video`,
    });
  },
};
</script>
