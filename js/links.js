document.querySelector('#showAll').onclick = function () {
    document.querySelector('#showAll').innerHTML = 'Show All';
    document.querySelector('#toggleBlog').innerHTML = 'Hide Blogs';
    document.querySelector('#toggleMixes').innerHTML = 'Hide Mixes';
    document.querySelector('#toggleArtists').innerHTML = 'Hide Artists';
    document.querySelectorAll('li').forEach(function (item, i) {
        item.style.display = '';
    });
};

document.querySelector('#toggleBlog').onclick = function () {
    document.querySelectorAll('li.blog').forEach(function (item, i) {
        item.style.display = item.style.display == '' ? 'none' : '';
    });

    document.querySelector('#toggleBlog').innerHTML = document.querySelector('#toggleBlog').innerHTML == 'Hide Blogs' ? 'Show Blogs' : 'Hide Blogs';
    if (document.querySelector('#toggleBlog').innerHTML == 'Hide Blogs' && document.querySelector('#toggleArtists').innerHTML == 'Hide Artists' && document.querySelector('#toggleMixes').innerHTML == 'Hide Mixes')
        document.querySelector('#showAll').innerHTML = 'Show All';
    else
        document.querySelector('#showAll').innerHTML = 'Not All';
};

document.querySelector('#toggleArtists').onclick = function () {
    document.querySelectorAll('li.artist').forEach(function (item, i) {
        item.style.display = item.style.display == '' ? 'none' : '';
    });

    document.querySelector('#toggleArtists').innerHTML = document.querySelector('#toggleArtists').innerHTML == 'Hide Artists' ? 'Show Artists' : 'Hide Artists';
    if (document.querySelector('#toggleBlog').innerHTML == 'Hide Blogs' && document.querySelector('#toggleArtists').innerHTML == 'Hide Artists' && document.querySelector('#toggleMixes').innerHTML == 'Hide Mixes')
        document.querySelector('#showAll').innerHTML = 'Show All';
    else
        document.querySelector('#showAll').innerHTML = 'Not All';
};

document.querySelector('#toggleMixes').onclick = function () {
    document.querySelectorAll('li.mix').forEach(function (item, i) {
        item.style.display = item.style.display == '' ? 'none' : '';
    });

    document.querySelector('#toggleMixes').innerHTML = document.querySelector('#toggleMixes').innerHTML == 'Hide Mixes' ? 'Show Mixes' : 'Hide Mixes';
    if (document.querySelector('#toggleBlog').innerHTML == 'Hide Blogs' && document.querySelector('#toggleArtists').innerHTML == 'Hide Artists' && document.querySelector('#toggleMixes').innerHTML == 'Hide Mixes')
        document.querySelector('#showAll').innerHTML = 'Show All';
    else
        document.querySelector('#showAll').innerHTML = 'Not All';
};