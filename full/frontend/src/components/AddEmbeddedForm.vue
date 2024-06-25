<template>
    <div>
      <h2>Add your embedded code here to add and review</h2>
      <form @submit.prevent="submitForm">
        <textarea v-model="embedCode" rows="10" cols="50"></textarea><br>
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        embedCode: '',
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost:3000/add-embed', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ embedCode: this.embedCode }),
          });
          if (!response.ok) {
            throw new Error('Failed to add embed code');
          }
          this.embedCode = ''; // Clear the textarea after submission
          this.$emit('codeAdded'); // Emit an event to notify the parent component
        } catch (error) {
          console.error('Error adding embed code:', error);
        }
      },
    },
  };
  </script>
  