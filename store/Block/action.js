export default {
  async getAllBlocks() {
    try {
      const {
        data: { data },
      } = await this.$axios.get(`/blocks`)
      return data
    } catch (err) {
      return {
        data: [],
        success: false,
        message: 'Something Went Wrong !',
      }
    }
  },
  change({ commit }, { key, value, mutation = 'setChange' }) {
    commit(mutation, { key, value })
  },
}
