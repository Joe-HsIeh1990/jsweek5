new Vue({
    el: '#app',
    data: {
        products: [],
        pagination: {},
        tempProduct: {
            imageUrl: [],
        },
        isNew: false,
        status: {
            fileUploading: false,
        },
        user: {
            token: '',
            uuid: '0657f443-a9f0-436a-8a03-fe4e7a52465d',
        },
    },
    methods: {
        getProducts(page = 1) {
            const api = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/products?page=${page}`;
            axios.defaults.headers.common.Authorization = `Bearer ${this.user.token}`;

            axios.get(api).then((response) => {
                this.products = response.data.data;
                this.pagination = response.data.meta.pagination;
            });
        },
        openModal(isNew, item) {
            switch (isNew) {
                case 'new':
                    this.$refs.productModel.tempProduct = {
                        imageUrl: [],
                    };
                    this.isNew = true;
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, item);
                    this.$refs.productModel.getProduct(this.tempProduct.id);
                    this.isNew = false;
                    break;
                case 'delete':
                    this.tempProduct = Object.assign({}, item);
                    $('#deleteProductModal').modal('show');
                    break;
                default:
                    break;
            }
        },
    },
    created() {
        this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (this.user.token === '') {
            window.location = 'Login.html';
        }
        this.getProducts();
    },
})