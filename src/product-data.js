const products = [
    {
        id: 1,
        name: "Traje para niña blanco",
        price: 150000,
        rating: 4,
        image: "../public/img/1.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 2,
        name: "Mameluco para recién nacido",
        price: 300000,
        rating: 4,
        image: "../public/img/2.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 3,
        name: "Traje para niña rosado",
        price: 50000,
        rating: 4,
        image: "../public/img/3.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 4,
        name: "Traje para niña blanco liso",
        price: 40000,
        rating: 4,
        image: "../public/img/4.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 5,
        name: "Mameluco unisex amarillo",
        price: 32000,
        rating: 4,
        image: "../public/img/5.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 6,
        name: "Camisa para niño",
        price: 98000,
        rating: 4,
        image: "../public/img/6.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 7,
        name: "Camisa para niño",
        price: 145000,
        rating: 4,
        image: "../public/img/7.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 8,
        name: "Camisa para niño",
        price: 28000,
        rating: 4,
        image: "../public/img/8.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 9,
        name: "Camisa para niño",
        price: 37000,
        rating: 4,
        image: "../public/img/9.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 10,
        name: "Camisa para niño",
        price: 60000,
        rating: 4,
        image: "../public/img/10.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 11,
        name: "Camisa para niño",
        price: 96000,
        rating: 4,
        image: "../public/img/11.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 12,
        name: "Camisa para niño",
        price: 130000,
        rating: 4,
        image: "../public/img/12.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 13,
        name: "Camisa para niño",
        price: 170000,
        rating: 4,
        image: "../public/img/13.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 13,
        name: "Camisa para niño",
        price: 190000,
        rating: 4,
        image: "../public/img/13.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 14,
        name: "Camisa para niño",
        price: 2000000,
        rating: 4,
        image: "../public/img/14.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 15,
        name: "Camisa para niño",
        price: 50000,
        rating: 4,
        image: "../public/img/15.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 16,
        name: "Camisa para niño",
        price: 65000,
        rating: 4,
        image: "../public/img/16.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 17,
        name: "Camisa para niño",
        price: 72000,
        rating: 4,
        image: "../public/img/17.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 18,
        name: "Camisa para niño",
        price: 64000,
        rating: 4,
        image: "../public/img/18.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 19,
        name: "Camisa para niño",
        price: 48000,
        rating: 4,
        image: "../public/img/19.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 20,
        name: "Camisa para niño",
        price: 75000,
        rating: 4,
        image: "../public/img/20.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 21,
        name: "Camisa para niño",
        price: 85000,
        rating: 4,
        image: "../public/img/21.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 22,
        name: "Camisa para niño",
        price: 48000,
        rating: 4,
        image: "../public/img/22.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 23,
        name: "Camisa para niño",
        price: 360000,
        rating: 4,
        image: "../public/img/23.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },
    {
        id: 24,
        name: "Camisa para niño",
        price: 98000,
        rating: 4,
        image: "../public/img/24.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet quam a nibh placerat dapibus. Aliquam erat volutpat. Sed euismod euismod faucibus. Proin at mauris a nulla interdum lobortis. Etiam euismod velit quis eros sagittis dictum. Pellentesque et arcu non dolor sagittis posuere. Phasellus nec neque sit amet erat condimentum hendrerit. Suspendisse vitae sem sit amet sapien mollis semper. Integer suscipit sodales nisi, eu scelerisque mi luctus vel. Vivamus vel purus sed odio blandit pharetra nec vitae lectus. Fusce ac elit vel massa consequat sodales."
    },

]

export default products;