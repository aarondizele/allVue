<template>
  <div id="">
    <div class="row">
      <div class="col-4 mt-3">
        <ul class="list-group">
          <router-link tag="li"
          to="/user/1"
          active-class="active"
          class="list-group-item"
          style="cursor: pointer;">User 1</router-link>
          <router-link tag="li"
          to="/user/2"
          active-class="active"
          class="list-group-item"
          style="cursor: pointer;">User 2</router-link>
          <router-link tag="li"
          to="/user/3"
          active-class="active"
          class="list-group-item"
          style="cursor: pointer;">User 3</router-link>
        </ul>
      </div>
      <div class="col-12">
        <button type="button"
                name="button"
                id="showModal"
                @click.stop="showModal"
                class="btn btn-primary mt-2">Show me</button>

        <div class="modal fade">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5>Popover in a modal</h5>
                <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                <hr>
                <h5>Tooltips in a modal</h5>
                <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    showModal () {
      $('.modal').modal('show');
    }
  }
}

</script>

<style scoped>
  .modal button{
    font-family: 'Roboto', Helvetica, sans-serif;
  }
</style>
