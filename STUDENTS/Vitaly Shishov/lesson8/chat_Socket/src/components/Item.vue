<template>
  <div class="chatItem">
    <font-awesome-icon :icon="userIcon" class="chatItemIcon" />
    <div class="chatItemUser">{{ item.user }}</div>
    <div class="chatItemText">{{ item.text }}</div>
    <font-awesome-icon
      :icon="delIcon"
      class="chatItemDel"
      @click.prevent="$emit('del', item.id)"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Item",
  data() {
    return {
      userIcon: faUser,
      delIcon: faTimesCircle,
    };
  },
  components: { FontAwesomeIcon },
  props: {
    item: { type: Object, default: () => ({}) },
  },
};
</script>

<style scoped lang="scss">
$mainColor: rgb(233, 59, 126);

.chatItem {
  display: flex;
  align-items: center;
  border-radius: 5px;
  min-height: 30px;
  padding: 5px 20px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  .chatItemIcon {
    color: $mainColor;
  }
  .chatItemUser {
    padding: 0 5px;
  }
  .chatItemText {
    padding: 0 10px;
    border-left: 1px solid rgba($mainColor, 0.5);
    margin-right: auto;
  }
  .chatItemDel {
    opacity: 0.3;
    &:hover {
      opacity: 1;
      cursor: pointer;
      transform: scale(1.2);
    }
  }
}
</style>
