$(function() {
    var instaGallery = $('#instaGallery');

    if (!instaGallery.length) {
        console.log('No Instagram Gallery container found.');
        return false;
    }

    var username = 'boutsourcing',
        profileLink = 'http://instagram.com/boutsourcing',
        userId = 1443448684,
        usersApi = 'https://api.instagram.com/v1/users',
        searchUsersApi = usersApi + '/search',
        getUserMediaApi = usersApi + '/' + userId + '/media/recent',
        count = instaGallery.data('count') ? instaGallery.data('count') : 12,
        accessToken = '',
        backupPhotoPrefix = '/img/about-us/gallery/insta-',
        backupPhotoExtension = '.jpg',
        setBackupPhoto = function(index, instaLink, instaPhoto) {

            if (instaLink.length) {
                $(instaLink[0]).attr('href', profileLink);
            }

            instaPhoto.length ?
                $(instaPhoto[0]).css(
                    'background-image', 'url("' + backupPhotoPrefix + index + backupPhotoExtension + '")'
                ).css(
                    'background-position', 'center center'
                ).delay((index + 1) * 90).animate({ opacity: 1 }, { duration: 300, easing: 'linear' }) :
                console.log('No Instagram Photo Box container found for index ' + index + '.');
        },
        showBackupPhotos = function() {
            var instaPhotoBoxes = instaGallery.find('.insta-photo-box');

            if (!instaPhotoBoxes.length) {
                console.log('No Instagram Photo Boxes containers found.');
                return false;
            }

            instaPhotoBoxes.each(function(index) {
                setBackupPhoto(index, $(this).find('.insta-link:first'), $(this).find('.insta-photo:first'));
            });
        };

    $.ajax({
        url: getUserMediaApi,
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: accessToken,
            count: count
        },
        success: function(response) {

            if (400 === response.meta.code) {
                showBackupPhotos();
                return false;
            }

            var instaPhotoBoxes = instaGallery.find('.insta-photo-box');

            if (!instaPhotoBoxes.length) {
                console.log('No Instagram Photo Boxes containers found.');
                return false;
            }

            instaPhotoBoxes.each(function(index) {
                var instaLink = $(this).find('.insta-link:first'),
                    instaPhoto = $(this).find('.insta-photo:first');

                if (!instaPhoto.length) {
                    console.log('No Instagram Photo Box container found for index ' + index + '.');
                    return true;
                }

                if (!response.data[index]) {
                    setBackupPhoto(index, instaLink, instaPhoto);
                    return true;
                }

                var instaLikes = $(this).find('.insta-likes:first'),
                    instaComments = $(this).find('.insta-comments:first');

                if (instaLink.length) {
                    $(instaLink[0]).attr('href', response.data[index].link);
                }

                if (instaPhoto.length) {
                    $(instaPhoto[0]).css(
                        'background-image', 'url("' + response.data[index].images.standard_resolution.url + '")'
                    ).delay((index + 1) * 90).animate({ opacity: 1 }, { duration: 300, easing: 'linear' });
                }

                if (instaLikes.length) {
                    $(instaLikes[0]).text(response.data[index].likes.count);
                }

                if (instaComments.length) {
                    $(instaComments[0]).text(response.data[index].comments.count);
                }

            });
        }
    });
});
