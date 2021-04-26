$(() => {
    const firstImage = $('#firstImage')
    const secondImage = $('#secondImage')
    const secondImageDiv = $('#secondImageDiv')
    const firstImageDiv = $('#firstImageDiv')

    firstImage.click(() => {
        secondImageDiv.removeClass('d-none')
        firstImageDiv.addClass('d-none d-md-block')
        firstImage.addClass('cursorNotAllowed')
    })

    $.getJSON("parameters.json", (data) => {
        const { image1, image2, differences } = data

        firstImage.attr('src', image1)
        secondImage.attr('src', image2)

        secondImage.click((() => {
            let clickCount = 0
            let imageSrc = image2
    
            return () => {
                if(clickCount === differences.length) {
                    return
                }
    
                if(clickCount === differences.length - 1) {
                    secondImage.addClass('cursorNotAllowed')
                }

                imageSrc = differences[clickCount].image
                secondImage.attr('src', imageSrc)
    
                clickCount += 1
            }
        })())
    })
})