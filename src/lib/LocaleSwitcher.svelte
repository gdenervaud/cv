<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Locales } from '../types';
  export let value: Locales;
  
  const dispatch = createEventDispatcher();

  function switchLocale(event: Event) {
    event.preventDefault();
    dispatch('locale-changed', (event.target as HTMLSelectElement)?.value);
  }
</script>

<div class="choose-locale">
  <select value={value} on:change={switchLocale}>
    <option value={Locales.en}>🇬🇧</option>
    <option value={Locales.fr}>🇫🇷</option>
  </select>
</div>

<style>
  .choose-locale {
    position: absolute;
    top: 0;
    right: 5px;
    display: flex;
    justify-content: center;
    z-index: 1000;
  }

  select {
    margin: 0;
    border: 0;
    background: transparent;
    font-size: 25px;
    cursor: pointer;
  }

  @media print {
    .choose-locale {
      display: none;
    }
  }
</style>