<template>
  <div class="main-div">
    <!-- <h2>Nickname is {{ $route.params.nickname }}</h2> -->

    <div>
      <div class="user-parent-div">
        <div class="title is-3 card user-online">Users Online</div>
        <div>
          <div class="select user-div is-multiple is-medium">
            <select
              id="userSelection"
              ref="userSelection"
              multiple
              size="20"
              class="user-selection is-one-quarter"
              v-on:click="onUserClicked"
            >
              <option
                class="card user-selection-option"
                v-for="user in users"
                :key="user.username"
              >{{user.username}}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="chat-parent-div">
        <div class="chat-div" ref="chatDiv">
          <div class="card welcome-card">Type your message below and hit send to start Chatting !!</div>
          <div
            v-bind:class="getUserClass(message.self)"
            v-for="message in messages"
            :key="message.id"
          >
            <h6 class="is-6">{{message.sender}}</h6>
            <br />
            <h4 class="title is-4">{{message.message}}</h4>
            <time datetime="1111-1-1">{{message.timestamp}}</time>
          </div>
        </div>

        <div class="field has-addons send-message-div">
          <div class="control message-div">
            <input class="input" type="text" placeholder="Type your message here..." />
          </div>
          <div class="control send-div">
            <button class="button is-dark" v-on:click="onSendClicked">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var users = [];
var messages = [];
let messagesHash = new Map();
var currentUser = "User-1";

users.push({ username: "User-1" });
users.push({ username: "User-2" });

export default {
  name: "Chat",
  created() {
    console.log("OnCreated");
    console.log(messagesHash);
    console.log(currentUser);
  },
  updated() {
    //console.log("OnUpdated")
    this.$refs.chatDiv.scrollTop =
      this.$refs.chatDiv.scrollHeight - this.$refs.chatDiv.clientHeight;
  },
  methods: {
    getUserClass(self) {
      if (self) {
        return "card user-2";
      } else {
        return "card user-1";
      }
    },
    onSendClicked() {
      messagesHash
        .get(currentUser)
        .push({
          message: "Foo" + currentUser + messagesHash.get(currentUser).length,
          id: messagesHash.get(currentUser).length,
          sender: "You",
          timestamp: "11:07 PM",
          self: true
        });

      refreshArray(messagesHash.get(currentUser), messages);
    },
    onUserClicked() {
      currentUser = this.$refs.userSelection.options[
        this.$refs.userSelection.selectedIndex
      ].value;
      //console.log("User selection updated: " + currentUser)
      if (messagesHash.get(currentUser) === undefined) {
        messagesHash.set(currentUser, []);
      }
      refreshArray(messagesHash.get(currentUser), messages);
    }
  },
  data() {
    return {
      messages,
      users
    };
  }
};

function refreshArray(input, output) {
  output.length = 0;
  output.push();
  output.pop();
  input.forEach(element => {
    output.push(element);
  });
}
</script>

<style scoped>
.user-parent-div {
  float: left;
  height: 100vh;
  width: 20%;
}
.user-online {
  height: 10vh;
  margin: 0%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.74);
  color: white;
}
.user-div {
  height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat-parent-div {
  float: right;
  width: 80%;
}
.chat-div {
  margin: 0 auto;
  height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.welcome-card {
  text-align: center;
  padding: 10px;
}
.user-selection {
  width: 20vw;
  overflow: hidden;
}
.user-selection-option {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  height: 40px;
}
.user-1 {
  margin-top: 10px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: rgb(238, 247, 200);
}
.user-2 {
  margin-top: 10px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: right;
  background-color: rgb(252, 222, 222);
}
.send-message-div {
  padding: 10px;
  height: 10vh;
}
.message-div {
  width: 90%;
  text-align: center;
  display: flex;
  align-items: center;
}
.send-div {
  text-align: center;
  display: flex;
  align-items: center;
}
</style>