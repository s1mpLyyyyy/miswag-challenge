export default {
  async getAllBlocks({ commit }) {
    try {
      const { data } = await this.$axios.get(`/items`)
      return JSON.stringify(data)
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
