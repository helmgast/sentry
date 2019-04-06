<?php
namespace FoF\Sentry\Listeners;

use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ServerRequestInterface;

class AddBrowserSentry
{
    protected $settings;
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $this->add_sentry($document);
    }
    private function add_sentry(Document &$document)
    {
        // Add Sentry browser checking if configured.
        if ($this->settings->get('fof-sentry.browser_errors') && $dsn = $this->settings->get('fof-sentry.dsn')) {
            $rawJs = '<script src="https://browser.sentry-cdn.com/5.0.5/bundle.min.js" crossorigin="anonymous"></script>';
            $rawJs .= '<script>Sentry.init({ dsn: "%%DSN%%" });</script>';
            $js = str_replace("%%DSN%%", $dsn, $rawJs);
            $document->head[] = $js;
        }
    }
}