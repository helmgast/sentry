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
        // Configure Sentry in the browser
        if ($this->settings->get('fof-sentry.browser_errors') && $dsn = $this->settings->get('fof-sentry.dsn')) {
            $js = '<script src="https://browser.sentry-cdn.com/5.0.5/bundle.min.js" crossorigin="anonymous"></script>';
            $js .= '<script>Sentry.init({ dsn: "%%DSN%%"%%FEEDBACK%% });</script>';
            if ($this->settings->get('fof-sentry.user_feedback')) {
                $js = str_replace('%%FEEDBACK%%', ',beforeSend(event){if(event.exception){Sentry.showReportDialog();}return event;}', $js);
            } else {
                $js = str_replace('%%FEEDBACK%%','',$js);
            }
            $js = str_replace('%%DSN%%', $dsn, $js);
            $document->head[] = $js;
        }
    }
}