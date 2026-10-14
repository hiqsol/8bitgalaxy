-- Markdown: indent with tabs.
-- Disable the built-in ftplugin's "recommended style" (it forces expandtab).
vim.g.markdown_recommended_style = 0

vim.api.nvim_create_autocmd("FileType", {
	pattern = "markdown",
	callback = function()
		vim.opt_local.expandtab = false
		vim.opt_local.tabstop = 4
		vim.opt_local.shiftwidth = 4
		vim.opt_local.softtabstop = 0
	end,
})
