<script>
  import { getValue } from 'nanostores';
  import Avatar from '../svelte/Avatar.svelte';
  import { avatarProps } from '../../store/avatar.js';
  import { getDefaultValues } from '../../util.js';

  const props = getValue(avatarProps);
  const propValues = getDefaultValues(props);
  const staticImage = {
    alt: "demo image",
    size: 64,
    src: "https://picsum.photos/128#svelte"
  }
  const staticLetter = {
    className: "bg-red-500",
    letter: "s",
    size: 32,
  }
</script>

<div class="d-flex jc-space-between">
  <div>
    <h3 class="fs-heading1 mt16">Svelte</h3>
    <Avatar {...propValues} />
  </div>
  <div>
    <h3 class="fs-title mt16">Static (image)</h3>
    <Avatar {...staticImage} />
  </div>
  <div>
    <h3 class="fs-title mt16">Static (letter)</h3>
    <Avatar {...staticLetter} />
  </div>
</div>
