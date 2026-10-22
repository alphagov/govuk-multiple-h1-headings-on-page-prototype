//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
const guidesData = require('./data/guides.js')

// Single route handler for all guides and layout variants

router.get('/guides/:guideId/:pageSlug?', (req, res, next) => {
    const { guideId } = req.params
    const pageSlug = req.params.pageSlug || 'index'
    const guide = guidesData[guideId]
    
    if (!guide) {
        return next() // 404 if guide ID doesn't exist
    }

    // 1. Handle layout selection (persists layout via query param or default to 'default)
    if (req.query.layout) {
        req.session.data['activeLayout'] = req.query.layout
    }
    const activeLayout = req.session.data['activeLayout'] || 'default'

    // 2. Get previous and next pagination based on guide.pages
    
    const pages = guide.pages
    const currentIndex = pages.findIndex(page => page.slug === pageSlug)
    const currentPage = pages.find(page => page.slug === pageSlug)
    let pagination = {}

    if (currentIndex !== -1) {
        const prevPage = pages[currentIndex - 1]
        const nextPage = pages[currentIndex + 1]
        const query = `?layout=${activeLayout}`

        pagination = {
            previous: prevPage ? {
                labelText: prevPage.text,
                href: `/guides/${guideId}/${prevPage.slug}${query}`
            } : null,
            next: nextPage ? {
                labelText: nextPage.text,
                href: `/guides/${guideId}/${nextPage.slug}${query}`
            } : null
        }
    }

    // 3. Make data available to nunjucks templates
    res.locals.currentGuide = guide
    res.locals.guideId = guideId
    res.locals.currentPageSlug = pageSlug
    res.locals.activeLayout = activeLayout
    res.locals.selectedLayout = `layouts/guide-layout-${activeLayout}.html`
    res.locals.pagination = pagination
    res.locals.currentPageTitle = currentPage ? currentPage.text : ''

    //4. Render the corresponding page

    const viewPath = `guides/${guideId}/${pageSlug}`
    res.render(viewPath, (err, html) => {
        if (err) {
            return next(err)
        }
        res.send(html)

    })

})

module.exports = router